# React Tour & Travel App: Architecture

## 1. Component Hierarchy
* **App** (State/Data Container)
    * **Navbar** (Logo, Navigation Links)
    * **Header** (Hero Image, Main Heading, SearchBar)
    * **CategoryFilters** (Row of clickable categories)
    * **TourList** (Grid container for tours)
        * **TourCard** (Individual tour item)
            * **Pill** (Conditional badge like "Best Seller")
            * **RatingStars** (Star rating display)
            * **Button** ("Book Now" action)
    * **TestimonialsContainer** (Wrapper for reviews)
        * **ReviewCard** (Individual user review + RatingStars)
    * **Footer** (Links, Socials, Copyright)