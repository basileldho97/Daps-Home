import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    // img: "../../images/carousel-1.jpg",
    title: "FAMILY'SLuxurious Appartment",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    // img: "../images/carousel-2.jpg",
    title: "FAMILY'SLuxurious Appartment",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Apartment",
    count: "6",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "2",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "100",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Luxurious rooms and apartments designed for relaxation and comfort.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Kitchen",
    discription: "Fully equipped kitchens for convenient, home-style cooking anytime.",
  },
  {
    icon: <FontAwesomeIcon icon={faPeopleRoof} class="fa-2x text-primary"/>,
    name: "family Apartment",
    discription: "Spacious family-friendly apartments for comfort and memorable stays.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Exciting indoor and outdoor games for all age groups.",
  },
  {
    icon: <FontAwesomeIcon icon={faLock} class="fa-2x text-primary"/>,
    name: "24*7 Security",
    discription: "Your safety assured with round-the-clock professional security services.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Stay fit and refreshed with modern gym and peaceful yoga.",
  },
];
export const team = [
  {
    // // image: "../images/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    // // image: "../images/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    // // image: "../images/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    // // image: "../images/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "24*7 Security",
      },
      {
        name: "Kitchen",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "family Apartment",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "12/120, Kulangara Channali, chendakuni, Meenangadi, Kerala 673591",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+91 6238226874",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "dapshomeinfo@gmail.com",
  },
];

export const contact = [
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    title: "Booking",
    email: "+91 6238226874",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    title: "Technical",
    email: "+956 66188947",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "dapshomeinfo@gmail.com",
  },
];
export const testimonial = [
  {
    description:
      "Daps Home apartments are ideal for both short and long stays. Quiet, cozy, and with all the comforts you’d need.",
    name: "Arunima Anil",
    profession: "",
    icon: (
      <i class="fa fa-quote-right  text-primary position-absolute end-0 bottom-0 me-4 mb-3 "></i>
    ),
    // img: "../images/testimonial-1.jpg",
  },
  {
    description:
      "Very impressed by the 24/7 security and cleanliness. Our kids enjoyed the play area while we relaxed in comfort.",
    name: "Arun Amal",
    profession: "",
    icon: (
      <i class="fa fa-quote-right  text-primary position-absolute end-0 bottom-0 me-4 mb-3 "></i>
    ),
    // img: "../images/testimonial-2.jpg",
  },
  {
    description:
      "Excellent value for money! The apartment was modern, comfortable, and close to all the resort amenities. Will definitely return.",
    name: "Athira",
    profession: "",
    icon: (
      <i class="fa fa-quote-right  text-primary position-absolute end-0 bottom-0 me-4 mb-3 "></i>
    ),
    // img: "../images/testimonial-3.jpg",
  },
  {
    description:
      "Loved the peaceful environment and well-furnished rooms. The kitchen was fully equipped, which made cooking easy during our stay.",
    name: "Jhon",
    profession: "",
    icon: (
      <i class="fa fa-quote-right  text-primary position-absolute end-0 bottom-0 me-4 mb-3 "></i>
    ),
    // img: "../images/testimonial-2.jpg",
  },
  {
    description:
      "Our stay at Daps Home was absolutely wonderful. The apartment was clean, spacious, and felt just like home. Perfect for families!",
    name: "Rohan K",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right  text-primary position-absolute end-0 bottom-0 me-4 mb-3 "></i>
    ),
    // img: "../images/testimonial-2.jpg",
  },
];

export const roomItems = [
  {
    // img: "../images/room-1.jpg",
    // price: "$110/night",
    name: "AC Apartment",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    // description:
    //   "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    // img: "../images/room-2.jpg",
    // price: "$110/night",
    name: "Non-AC Apartment",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    // description:
    //   "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    // img: "../images/room-3.jpg",
    // price: "$110/night",
    name: "fully furnished Apartment",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    // description:
    //   "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../images/room-3.jpg",
    // price: "$110/night",
    name: "Non furnished Apartment",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    // description:
    //   "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../images/room-4.jpg",
    // price: "$110/night",
    name: "Non furnished Apartment",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    // description:
    //   "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
