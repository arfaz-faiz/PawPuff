export const PRICING = {
  dog: {
    alaCarte: [
      { 
        id: "dog-bath", 
        name: "Happy Bath", 
        price: 1100,
        description: "A refreshing and hygienic bath for your loyal companion.",
        features: ["Deep Cleansing", "Ear Cleaning", "Nail Clipping", "Blow Dry"],
        popular: false
      },
      { 
        id: "dog-groom", 
        name: "Super Grooming", 
        price: 1499,
        description: "Full body styling and hygiene for a complete transformation.",
        features: ["Everything in Bath", "Hair Styling", "Paw Massage", "Perfume Spray"],
        popular: true
      },
      { 
        id: "dog-style", 
        name: "Puff Styling", 
        price: 1999,
        description: "Elite artisan styling for the most discerning show-dogs.",
        features: ["Artisan Cut", "Hydrating Mask", "Scissor Finish", "Silk Coat Therapy"],
        popular: false
      },
    ],
    subscriptions: [
      { 
        id: "sub-dog-bath", 
        name: "Happy Bath Monthly", 
        price: 4950,
        description: "Weekly refreshing sessions to keep your dog pristine.",
        features: ["4 Sessions Monthly", "Priority Booking", "Free De-Shedding", "Member-Only Spa Access"],
        popular: true
      },
      { 
        id: "sub-dog-groom", 
        name: "Elite Grooming Membership", 
        price: 6745,
        description: "Bi-weekly full grooming for a permanent elite look.",
        features: ["2 Super Groomings", "2 Refresh Baths", "unlimited Nail Clips", "20% off Store Items"],
        popular: false
      },
      { 
        id: "sub-dog-style", 
        name: "Royal Styling Circle", 
        price: 8995,
        description: "The ultimate unlimited maintenance for show-stopping dogs.",
        features: ["Unlimited Styling", "Concierge Pickup", "Home Grooming Opt", "Exclusive Event Access"],
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
        description: "Stress-free essential hygiene for your feline friend.",
        features: ["Dry Foam Bath", "Ear Cleaning", "Claw Clipping", "Brushing"],
        popular: false
      },
      { 
        id: "cat-groom", 
        name: "Super Kitty Grooming", 
        price: 1499,
        description: "Complete styling and spa treatment specifically for cats.",
        features: ["Full Grooming", "Scented Spas", "Mat Removal", "Skin Conditioning"],
        popular: true
      },
      { 
        id: "cat-style", 
        name: "Puff Cat Styling", 
        price: 1999,
        description: "Artisan feline styling for the truly discerning cat.",
        features: ["Show Cut", "Silk Wash", "Eye Care", "Coat Nourishment"],
        popular: false
      },
    ],
    subscriptions: [
      { 
        id: "sub-cat-hygiene", 
        name: "Monthly Feline Care", 
        price: 4495,
        description: "Regular maintenance to keep your cat comfortable and clean.",
        features: ["4 Hygiene Sessions", "De-Shedding", "Emergency Grooming", "Home Tips"],
        popular: true
      },
    ],
  },
} as const;

export type PricingType = typeof PRICING;
