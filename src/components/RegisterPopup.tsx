import React, { useState } from "react";
import { Event, EventRegistrationFormData } from "../data/types";

interface RegistrationFormProps {
  event: Event;
  SubmitEventRegistrationForm: (formData: EventRegistrationFormData) => void;
  RegisterForEventPopup: (event: Event, popupshow: boolean) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  event,
  SubmitEventRegistrationForm,
  RegisterForEventPopup,
}) => {

  const [invitations, setInvitations] = useState<string[]>([]);

  const handleInvitationChange = (index: number, value: string) => {
    const updatedInvitations = [...invitations];
    updatedInvitations[index] = value;
    setInvitations(updatedInvitations);
  };

  const addInvitationField = () => {
    if (invitations.length < event.maxParticipantsTeamSize - 1) {
      setInvitations([...invitations, ""]);
    }
  };

  const removeInvitationField = () => {
    if (invitations.length > 0) {
      const updatedInvitations = invitations.slice(0, -1);
      setInvitations(updatedInvitations);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: EventRegistrationFormData = {
      invitation: invitations.filter((inv) => inv.trim() !== ""),
    };
    SubmitEventRegistrationForm(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-20 w-4/5 md:w-3/5 lg:w-2/5 p-4 rounded-xl shadow-lg">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white relative">
          <button
            type="button"
            onClick={() => RegisterForEventPopup(event, false)}
            className="absolute text-2xl top-2 right-4 text-white bg-transparent hover:text-gray-400 focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Event Registration
          </h2>
          <form onSubmit={handleSubmit}>
            {event.maxParticipantsTeamSize > 1 && (
              <div>
                <label className="block text-sm font-medium mb-2 text-center">
                  Invite Friends (Max: {event.maxParticipantsTeamSize - 1})
                </label>
                {invitations.map((invitation, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={invitation}
                      onChange={(e) =>
                        handleInvitationChange(index, e.target.value)
                      }
                      placeholder={`Friend's KGTS ID`}
                      className="flex-grow px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <div className="flex items-center space-x-2 mb-4 justify-center">
                  <button
                    type="button"
                    onClick={addInvitationField}
                    className="bg-blue-600 px-4 py-2 rounded text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={removeInvitationField}
                    className="bg-red-500 px-4 py-2 rounded text-white font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    -
                  </button>
                </div>
                {invitations.length == 0 && (
                  <p className="text-center text-sm text-gray-400 mb-4">
                    Or individual registration
                  </p>
                )}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-green-600 py-2 rounded text-white font-bold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
