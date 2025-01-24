import { Event, EventRegistrationFormData } from "@/data/types";
import React, { useEffect, useState } from "react";

interface RegistrationFormProps {
  RegisterForEventPopup: (event: Event, popupshow: boolean) => void;
  event: Event;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  RegisterForEventPopup,
  event,
}) => {
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState([""]);
  const maxParticipants = event.max_participants || 5; //max participents allowed
  const [jwtAuthToken, setJwtAuthToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);

  const addParticipantField = () => {
    if (participants.length < maxParticipants) {
      setParticipants([...participants, ""]);
    }
  };

  const removeParticipantField = (index: number) => {
    console.log("index", index);
    console.log("participants", participants);
    const updatedParticipants = participants.filter((_, i) => i !== index);
    setParticipants(updatedParticipants);
  };

  const handleParticipantChange = (index: number, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = value;
    setParticipants(updatedParticipants);
  };

  function getIdFromAuthToken(authToken: any) {
    try {
      // Decode the JWT payload (the middle part of the token)
      const payloadBase64 = authToken.split(".")[1]; // JWT format: header.payload.signature
      const payloadJson = atob(payloadBase64); // Decode Base64 string
      const payload = JSON.parse(payloadJson); // Parse the JSON payload

      return payload.id; // Extract and return the "id" field
    } catch (error) {
      return null; // Return null if an error occurs
    }
  }

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken === null) {
      window.location.href = "/login";
    } else {
      setJwtAuthToken(authToken);
      const leaderId = getIdFromAuthToken(authToken);
      if (leaderId !== null) {
        addParticipantField();
        handleParticipantChange(0, leaderId);
      } else {
        window.location.href = "/login";
      }
    }
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000); // Errors will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [errors]);
  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 3000); // Errors will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [success]);

  async function registerTeam(
    data: EventRegistrationFormData,
    jwtToken: string
  ) {
    const url = "http://localhost:5000/api/register";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        const result = await response.json();
        console.log(result.message); // Registration successful
        setSuccess(result.message);
      } else {
        const errorData = await response.json();
        if(response.status>=400 && response.status<500){
          setErrors((prevErrors) => [
            ...prevErrors,
            `Error: ${errorData.message}`,
          ]);
        }
        else if(response.status==500){
          setErrors((prevErrors) => [
            ...prevErrors,
            "Server Error: Error processing registration.",
          ]);
        }else {
          setErrors((prevErrors) => [
            ...prevErrors,
            `Unexpected error: ${errorData.message}`,
          ]);
        }
      }
    } catch (error) {
      console.error("Network error or server not reachable:", error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (teamName.trim() === "") {
      setErrors((prevErrors) => [...prevErrors, "Team name cannot be empty."]);
      return;
    }
    const data = {
      eventId: event.id,
      teamLeaderId: participants[0],
      teamMemberIds: participants.slice(1).filter((p) => p.trim() !== ""),
      teamName,
    };
    if (jwtAuthToken) registerTeam(data, jwtAuthToken);
    console.log("Submitted Data:", data); // Replace with actual submit function
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 w-4/5 md:w-3/5 lg:w-2/5 p-6 rounded-xl shadow-xl relative">
        <button
          className="absolute top-2 right-4 bold text-2xl "
          onClick={() => RegisterForEventPopup(event, false)}
        >
          x
        </button>
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Event Registration
        </h1>
        {success != null && (
          <ul
            className="bg-green-600 border border-green-700 text-red-100 px-4 py-3 rounded relative mb-4"
            role="success"
          >
            <li className="flex items-center py-1">{success}</li>
          </ul>
        )}
        {errors.length > 0 && (
          <ul
            className="bg-red-600 border border-red-700 text-red-100 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            {errors.map((error, index) => (
              <li key={index} className="flex items-center py-1">
                {error}
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-center">
              Team Name
            </label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter team name"
              className="w-full text-center border border-gray-600 bg-gray-800 text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Participants
            </label>

            {participants.map((participant, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={participant}
                  onChange={(e) => {
                    if (index != 0)
                      handleParticipantChange(index, e.target.value);
                  }}
                  placeholder={`Participant ${index + 1} ID`}
                  className="flex-1 border border-gray-600 bg-gray-800 text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {index != 0 && (
                  <button
                    type="button"
                    onClick={() => removeParticipantField(index)}
                    className="text-red-400 hover:text-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            {participants.length < maxParticipants && (
              <button
                type="button"
                onClick={addParticipantField}
                className="text-purple-400 hover:text-purple-600 font-medium"
              >
                + Add Participant
              </button>
            )}
          </div>
          <div className="text-gray-500 text-sm">
            {`Your Team size: ${participants.length}`}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-bold py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
