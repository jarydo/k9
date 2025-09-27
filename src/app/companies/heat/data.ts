export interface DogProfile {
  id: number;
  name: string;
  age: number;
  breed: string;
  image: string;
  bio: string;
  distance: number;
  tags: string[];
  relationshipStatus: string;
  occupation: string;
  worstHabit: string;
}

export const dogProfiles: DogProfile[] = [
  {
    id: 1,
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop&crop=face",
    bio: "Love long walks and tennis balls!",
    distance: 2,
    tags: ["Loves sniffing", "Good boy", "Clean", "Loves fetch"],
    relationshipStatus: "Single",
    occupation: "Professional Good Boy",
    worstHabit: "Eats socks and then looks innocent",
  },
  {
    id: 2,
    name: "Luna",
    age: 2,
    breed: "Border Collie",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=600&fit=crop&crop=face",
    bio: "Smart and playful. Great with kids!",
    distance: 1,
    tags: ["Chases tail", "Smart", "Energetic", "Loves puzzles"],
    relationshipStatus: "It's complicated",
    occupation: "Agility Champion",
    worstHabit: "Barks at her own reflection",
  },
  {
    id: 3,
    name: "Max",
    age: 4,
    breed: "German Shepherd",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=600&fit=crop&crop=face",
    bio: "Loyal and protective. Loves cuddles!",
    distance: 3,
    tags: ["Protective", "Loyal", "Good guard", "Cuddle bug"],
    relationshipStatus: "Single",
    occupation: "Security Specialist",
    worstHabit: "Farts in elevators and blames it on humans",
  },
  {
    id: 4,
    name: "Bella",
    age: 1,
    breed: "French Bulldog",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=600&fit=crop&crop=face",
    bio: "Adorable and cuddly. Perfect apartment dog!",
    distance: 0.5,
    tags: ["Snorts", "Cute", "Lazy", "Loves naps"],
    relationshipStatus: "Single",
    occupation: "Professional Napper",
    worstHabit: "Snorts so loud it wakes up the neighbors",
  },
  {
    id: 5,
    name: "Charlie",
    age: 5,
    breed: "Labrador Mix",
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=600&fit=crop&crop=face",
    bio: "Gentle giant who loves water and treats!",
    distance: 4,
    tags: ["Water lover", "Gentle", "Food motivated", "Swimmer"],
    relationshipStatus: "In a relationship",
    occupation: "Lifeguard",
    worstHabit: "Steals food from other dogs' bowls",
  },
  {
    id: 6,
    name: "Daisy",
    age: 2,
    breed: "Beagle",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=600&fit=crop&crop=face",
    bio: "Curious and energetic. Great for adventures!",
    distance: 2.5,
    tags: ["Curious", "Adventurous", "Howler", "Explorer"],
    relationshipStatus: "Single",
    occupation: "Adventure Guide",
    worstHabit: "Howls at 3 AM for no reason",
  },
  {
    id: 7,
    name: "Rocky",
    age: 6,
    breed: "Boxer",
    image:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=600&fit=crop&crop=face",
    bio: "Playful and goofy. Loves to make you laugh!",
    distance: 1.5,
    tags: ["Goofy", "Playful", "Clumsy", "Entertainer"],
    relationshipStatus: "Single",
    occupation: "Comedian",
    worstHabit: "Knocks over everything with his tail",
  },
  {
    id: 8,
    name: "Molly",
    age: 3,
    breed: "Cocker Spaniel",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=600&fit=crop&crop=face",
    bio: "Sweet and gentle. Perfect family dog!",
    distance: 3.5,
    tags: ["Sweet", "Gentle", "Family oriented", "Loving"],
    relationshipStatus: "Single",
    occupation: "Therapist",
    worstHabit: "Gets separation anxiety from her own shadow",
  },
  {
    id: 9,
    name: "Zeus",
    age: 4,
    breed: "Rottweiler",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=600&fit=crop&crop=face",
    bio: "Big heart in a big body. Very loyal!",
    distance: 5,
    tags: ["Loyal", "Big heart", "Protective", "Gentle giant"],
    relationshipStatus: "Single",
    occupation: "Bodyguard",
    worstHabit: "Takes up the entire bed and snores like a chainsaw",
  },
  {
    id: 10,
    name: "Princess",
    age: 2,
    breed: "Pomeranian",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=600&fit=crop&crop=face",
    bio: "Small but mighty. Loves attention and treats!",
    distance: 1.2,
    tags: ["Sassy", "Attention seeker", "Barky", "Diva"],
    relationshipStatus: "Single",
    occupation: "Influencer",
    worstHabit: "Demands treats by barking until you give in",
  },
];
