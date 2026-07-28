/* =========================================================================
   ACTON INDOOR TENNIS ASSOCIATION — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Acton Indoor Tennis Association",
    shortName: "AIT",
    tagline: "Year-Round Tennis, Owned by Its Members",
  },

  contact: {
    venueName: "Acton Indoor Tennis Association",
    address: "908 Main Street, Acton, MA 01720",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Acton+Indoor+Tennis+Association+Acton+MA",
    phone: "978-263-9059",
    phoneHref: "tel:+19782639059",
    email: "actonindoortennis@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "Book a Court",
      subtitle: "Live court availability inside the Bubble, no third-party detour.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "Book a Court",
        body: "Hi Acton Indoor Tennis Association,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    membership: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "Membership Options",
      subtitle: "Live court availability inside the Bubble, no third-party detour.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "Membership Options",
        body: "Hi,\n\nI'd like to register for Membership Options.\n\nThank you!",
      },
    },

    leagues: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "Join a League",
      subtitle: "Live court availability inside the Bubble, no third-party detour.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "Join a League",
        body: "Hi,\n\nI'd like to register for Join a League.\n\nThank you!",
      },
    },

    ladder: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "Find a Partner",
      subtitle: "Live court availability inside the Bubble, no third-party detour.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "Find a Partner",
        body: "Hi,\n\nI'd like to register for Find a Partner.\n\nThank you!",
      },
    },

    lessons: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "Book a Lesson",
      subtitle: "Live court availability inside the Bubble, no third-party detour.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "Book a Lesson",
        body: "Hi,\n\nI'd like to register for Book a Lesson.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.acton-indoor-tennis.example/schedule",
      title: "New to the Bubble?",
      subtitle: "Come see the club, meet a few members, and find out which membership actually fits how you play.",
      services: [{"name": "Indoor court", "meta": "60 min \u00b7 singles or doubles"}, {"name": "Permanent time", "meta": "Weekly \u00b7 same slot"}, {"name": "Guest court", "meta": "60 min \u00b7 bring a friend"}],
      fallbackEmail: {
        to: "actonindoortennis@gmail.com",
        subject: "New to the Bubble?",
        body: "Hi Acton Indoor Tennis Association,\n\nI'm interested in New to the Bubble?.\n\nThank you!",
      },
    },
  },
};
