"use client";
import React from "react";
import { BlogCard } from "../../components/BlogCard";
import Image from "next/image";
import DotBackground from "@/components/DotBackground";

const BlogPage = () => {
  const blogs = [
    {
      id: "1",
      title: "Game Theory in Taxation",
      author: "Medium Article",
      date: "December 12, 2024",
      words: 120,
      content:
        "This article explores tax evasion through a game-theoretic lens, developing a model by incorporating key factors such as transparency, inspection costs, and both evasion and conscientious tax payment behaviours. Using Nash equilibrium in pure strategies, the study seeks to optimise tax burden and provides novel insights. These indings offer the potential for enhancing tax systems in real economies.",
      image:
        "https://img.freepik.com/free-vector/tax-concept-illustration_114360-5984.jpg?ga=GA1.1.63994034.1734113479&semt=ais_hybrid",
      link: "https://medium.com/@kgtsiitkgp/game-theory-in-taxation-eab50bc3fae7",
    },
    {
      id: "2",
      title: "Behavioral Game Theory",
      author: "Medium Article",
      date: "October 11, 2024",
      words: 110,
      content:
        "“Not everything that can be counted counts, and not everything that counts can be counted.” — William Bruce Cameron. Imagine you and your friend both want to go to a movie. You prefer action movies while your friend prefers comedies. You both want to spend the evening together but have different preferences. The challenge is coordinating your choices to maximize your mutual enjoyment. This situation can be analyzed and solved using the framework of Game Theory.",
      image:
        "https://img.freepik.com/free-photo/group-friends-party_23-2148115789.jpg?ga=GA1.1.63994034.1734113479&semt=ais_hybrid",
      link: "https://medium.com/@kgtsiitkgp/behavioral-game-theory-071b3a78b67e",
    },
    {
      id: "3",
      title: "Expanding Beyond Nash Equilibrium",
      author: "Medium Article",
      date: "September 8, 2024",
      words: 70,
      content:
        "Nash Equilibrium has long been a cornerstone of game theory, offering insights into strategic decision-making where no player has an incentive to deviate unilaterally. However, real-world scenarios often involve complexities and dynamics that extend beyond this static concept. Exploring alternative equilibrium concepts can offer a richer understanding of strategic interactions in more complex and adaptive environments.",
      image:
        "https://img.freepik.com/free-photo/grayscale-shot-chess-pieces-chessboard_181624-11736.jpg?ga=GA1.1.63994034.1734113479&semt=ais_hybrid",
      link: "https://medium.com/@kgtsiitkgp/expanding-beyond-nash-equilibrium-fc1f2c08a695",
    },
    {
      id: "4",
      title: "Ethical Considerations in Game Theory",
      author: "Medium Article",
      date: "August 23, 2024",
      words: 80,
      content:
        "Game Theory is the study of strategic decision making among ‘rational’ actors. Traditionally, game theory neglects the innate feelings of morality and ethics that makes one human. However, as we model human behavior in game theory, we are inevitably faced with questions of fairness and justice and how morality influences decisions.",
      image: "/images/ethics.png",
      link: "https://medium.com/@kgtsiitkgp/ethical-considerations-in-game-theory-and-strategic-decision-making-0d434a76a66e",
    },
    {
      id: "5",
      title: "Game Theory in Sports",
      author: "Medium Article",
      date: "July 13, 2024",
      words: 100,
      content:
        "Game theory involves analyzing the decisions that participants make in situations involving cooperation or conflict, taking into account the actions of others, and finding the best strategy that one should play.",
      image:
        "https://img.freepik.com/premium-photo/young-basketball-player-shoot_53876-44535.jpg?ga=GA1.1.63994034.1734113479&semt=ais_hybrid",
      link: "https://medium.com/@kgtsiitkgp/game-theory-in-sports-analyzing-competitive-strategies-and-player-interactions-a2966d50acc3",
    },
    {
      id: "6",
      title: "The Delusional Fairness of Voting Systems",
      author: "Medium Article",
      date: "June 3, 2024",
      words: 80,
      content:
        "In the realm of democratic governance, elections stand as the cornerstone of representation and decision-making. Yet, beneath the surface of the voting process, a world of strategic dynamics emerges, illuminated by the principles of game theory.",
      image:
        "https://img.freepik.com/premium-photo/vote-democratic-elections-referendum-make-right-choice_355067-1489.jpg?ga=GA1.1.63994034.1734113479&semt=ais_hybrid",
      link: "https://medium.com/@kgtsiitkgp/the-delusional-fairness-of-voting-system-a8abead16cb1",
    },
  ];

  return (
    <div className="min-h-screen">
      <DotBackground />
      <div className="py-10 px-20 my-4">
        <p className="text-3xl sm:text-5xl mb-5 mt-12 font-bold text-primary text-center">
          Blogs
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 lg:gap-6 my-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
