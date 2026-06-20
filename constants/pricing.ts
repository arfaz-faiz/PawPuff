export const PRICING = {
  dog: {
    alaCarte: [
      { 
        id: "dog-bath", 
        name: "Happy Bath", 
        price: 1100,
        description: "Bath with Premium Shampoo, Conditioner, Blow Dry, Combing & Brushing",
        features: ["Premium Shampoo", "Conditioner", "Blow Dry", "Combing & Brushing"],
        popular: false
      },
      { 
        id: "dog-groom", 
        name: "Super Grooming", 
        price: 1499,
        description: "Happy Bath, Paw Massage, Teeth Clean, Nail Clip, Ear Clean, Eye Clean, Sanitary Clip",
        features: ["Everything in Happy Bath", "Paw Massage", "Teeth Clean", "Nail Clip", "Ear & Eye Clean", "Sanitary Clip"],
        popular: true
      },
      { 
        id: "dog-trim", 
        name: "Paw Trim", 
        price: 1599,
        description: "Full Body Trimming (No Hairstyling) Nail Clipping, Ear Cleaning, Eye Cleaning",
        features: ["Full Body Trimming", "Nail Clipping", "Ear Cleaning", "Eye Cleaning"],
        popular: false
      },
      { 
        id: "dog-style", 
        name: "Puff Styling", 
        price: 1999,
        description: "Super Grooming, Full Body Trimming, Hair Styling",
        features: ["Super Grooming", "Full Body Trimming", "Hair Styling"],
        popular: false
      },
    ],
    subscriptions: [
      { 
        id: "sub-dog-bath", 
        name: "Happy Bath", 
        price: 4950,
        description: "5 refreshing bath sessions with premium care.",
        features: ["5 Bath Sessions", "Priority Booking", "Member-Only Spa Access"],
        popular: true
      },
      { 
        id: "sub-dog-groom", 
        name: "Super Grooming", 
        price: 6745,
        description: "5 full grooming sessions for consistent concierge care.",
        features: ["5 Super Grooming Sessions", "Priority Booking", "Unlimited Nail Clips"],
        popular: false
      },
      { 
        id: "sub-dog-style", 
        name: "Puff Styling", 
        price: 8995,
        description: "5 premium styling sessions for a polished look.",
        features: ["5 Styling Sessions", "Concierge Pickup", "Home Grooming Option", "Exclusive Event Access"],
        popular: false
      },
    ],
  },
  cat: {
    alaCarte: [
      { 
        id: "cat-hygiene", 
        name: "Kitty Hygiene", 
        price: 999,
        description: "Nail Clip, Teeth Cleaning, Ear-Eye Cleaning, Sanitary Clipping, Combing & Brushing",
        features: ["Nail Clip", "Teeth Cleaning", "Ear & Eye Cleaning", "Sanitary Clipping", "Combing & Brushing"],
        popular: false
      },
      { 
        id: "cat-groom", 
        name: "Super Grooming", 
        price: 1499,
        description: "Bath with Premium Shampoo, Conditioner, Blow Dry, Paw Massage, Minor Trim",
        features: ["Premium Bath", "Conditioner", "Blow Dry", "Paw Massage", "Minor Trim"],
        popular: true
      },
      { 
        id: "cat-style", 
        name: "Puff Styling", 
        price: 1999,
        description: "Super Grooming, Full Body Trimming, Hair Styling",
        features: ["Super Grooming", "Full Body Trimming", "Hair Styling"],
        popular: false
      },
    ],
    subscriptions: [
      { 
        id: "sub-cat-hygiene", 
        name: "Kitty Hygiene", 
        price: 4495,
        description: "5 feline hygiene sessions for calm comfort.",
        features: ["5 Hygiene Sessions", "Priority Booking", "Home Care Tips"],
        popular: true
      },
    ],
  },
} as const;

export type PricingType = typeof PRICING;
