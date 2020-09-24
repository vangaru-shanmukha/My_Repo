import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./cartTypes";
import Chicken_Curry from '../../components/assets/Chicken_Curry.jpg';
import Punjabi_Style_Cabbage from '../../components/assets/Punjabi_Style_Cabbage.jpg';
import Oven_Roasted_Chicken_Tikka from '../../components/assets/Oven_Roasted_Chicken_Tikka.jpg';
import Butter_Chicken_with_Spiced_Cashews from '../../components/assets/Butter_Chicken_with_Spiced_Cashews.jpg';
import Sindhi_Biryani from '../../components/assets/Sindhi_Biryani.jpg';
import Matar_with_Feta from '../../components/assets/Matar_with_Feta.jpg';
import Stewed_Split_Red_Lentils from '../../components/assets/Stewed_Split_Red_Lentils.jpg';

const initialState = {
    recepies: [
        {
            id: 1,
            name: "Chicken Curry",
            image: Chicken_Curry,
            description: "If you are looking for an easy way to make yummy chicken curry, you'll love this recipe from Sanjeev Kapoor. This curry recipe is a traditional Indian dish that will take under an hour to cook. Serve it up with some rice to round out your meal. Skip store-bought curry and learn to make your own. You won't be disappointed by it's fresh taste. Plus, when you make your own curry at home, you can adjust the spices to tastes, personalizing it to your flavor palatte. While the ingridient list might look intimidating, most of it consists of spices you already have in your cupboard.",
            preparation: {
                time: "10 min",
                ingredients: [
                    "1 (1¾-pound/800-gram) chicken, skinned and cut into 12 pieces",
                    "¼ cup (50 ml) vegetable oil",
                    "1-inch (2½-cm) cinnamon stick",
                    "4 or 5 cloves",
                    "4 or 5 green cardamom pods",
                    "4 medium red onions, grated",
                    "1 tablespoon fresh ginger paste",
                    "1 tablespoon fresh garlic paste",
                    "½ teaspoon ground turmeric",
                    "1½ tablespoons ground coriander",
                    "1½ teaspoons ground roasted cumin (see Notes)",
                    "1 teaspoon red chile powder",
                    "4 medium tomatoes, puréed",
                    "1½ teaspoons table salt",
                    "1 teaspoon garam masala",
                    "1 tablespoon chopped fresh cilantro"
                ],
                procedure: [
                    "Trim the excess fat from the chicken and put the pieces in a large bowl.",
                    "Place a medium nonstick saucepan over medium heat and add the oil. When small bubbles appear at the bottom of the pan, add the cinnamon, cloves, and cardamom, and sauté for 1 minute. When the spices change color and are fragrant, add the onions and sauté for 3 to 4 minutes or until golden brown. Add the ginger paste and garlic paste, and sauté for 2 to 3 minutes, stirring continuously.",
                    "Add the turmeric, coriander, cumin, and chile powder. Stir well.",
                    "Add the tomatoes and sauté for 3 to 4 minutes, stirring continuously. Cook for 7 to 8 minutes or until the oil comes to the top.",
                    "Add the chicken and salt, and stir. Increase the heat to high and sauté for 5 minutes or until the chicken pieces are well coated with the sauce. Add 1½ cups (300 ml) water and bring to a boil. Lower the heat to low, cover, and cook for 10 minutes or until the chicken is cooked through.",
                    "Transfer to a serving bowl. Sprinkle with the garam masala and garnish with the cilantro. Serve hot."
                ]
            },
            isFavourite: false
        },
        {
            id: 2,
            name: "Punjabi-Style Cabbage",
            image: Punjabi_Style_Cabbage,
            description: "This Punjabi-Style Cabbage is an easy cabbage recipe that infuses your meal with the flavors of Punjab, a region in India. It can be made in the slow cooker, but when sauteed on the stovetop it only takes about five minutes to throw together! Most Indian food recipes require a lot of preparation, but not this one - with a few spices such as turmeric and cumin, plain cabbage is transformed into an exotic new dish. Recipes with turmeric are also beneficial for your health, as turmeric is an amazing spice that helps prevent a number of ailments. If you've never tried Punjabi food, this is a great starting point!",
            preparation: {
                time: "10 min",
                ingredients: [
                    "1 (1¾-pound/800-gram) chicken, skinned and cut into 12 pieces",
                    "¼ cup (50 ml) vegetable oil",
                    "1-inch (2½-cm) cinnamon stick",
                    "4 or 5 cloves",
                    "4 or 5 green cardamom pods",
                    "4 medium red onions, grated",
                    "1 tablespoon fresh ginger paste",
                    "1 tablespoon fresh garlic paste",
                    "½ teaspoon ground turmeric",
                    "1½ tablespoons ground coriander",
                    "1½ teaspoons ground roasted cumin (see Notes)",
                    "1 teaspoon red chile powder",
                    "4 medium tomatoes, puréed",
                    "1½ teaspoons table salt",
                    "1 teaspoon garam masala",
                    "1 tablespoon chopped fresh cilantro"
                ],
                procedure: [
                    "Trim the excess fat from the chicken and put the pieces in a large bowl.",
                    "Place a medium nonstick saucepan over medium heat and add the oil. When small bubbles appear at the bottom of the pan, add the cinnamon, cloves, and cardamom, and sauté for 1 minute. When the spices change color and are fragrant, add the onions and sauté for 3 to 4 minutes or until golden brown. Add the ginger paste and garlic paste, and sauté for 2 to 3 minutes, stirring continuously.",
                    "Add the turmeric, coriander, cumin, and chile powder. Stir well.",
                    "Add the tomatoes and sauté for 3 to 4 minutes, stirring continuously. Cook for 7 to 8 minutes or until the oil comes to the top.",
                    "Add the chicken and salt, and stir. Increase the heat to high and sauté for 5 minutes or until the chicken pieces are well coated with the sauce. Add 1½ cups (300 ml) water and bring to a boil. Lower the heat to low, cover, and cook for 10 minutes or until the chicken is cooked through.",
                    "Transfer to a serving bowl. Sprinkle with the garam masala and garnish with the cilantro. Serve hot."
                ]
            },
            isFavourite: false
        },
        {
            id: 3,
            name: "Oven-Roasted Chicken Tikka",
            image: Oven_Roasted_Chicken_Tikka,
            description: "Chicken tikka is a Southeast Asian dish that's commonly seen on the menu of Indian food restaurants. This Oven-Roasted Chicken Tikka recipe is a delicious way to bring the flavor of Indian recipes to your home cooking. Turmeric, paprika, and other spices give this chicken a unique flavor that's popular the world over. It's a great dish to make for a dinner party, and your guests will be hooked on the flavor of this Indian chicken recipe from then on!",
            preparation: {},
            isFavourite: false
        },
        {
            id: 4,
            name: "Butter Chicken with Spiced Cashews",
            image: Butter_Chicken_with_Spiced_Cashews,
            description: "I used to feel pretty conflicted about butter chicken. It’s pretty decadently delicious, but it’s so often poorly cooked and then doused with way too much cream to compensate. I changed my tune while writing this book, since almost every friend who came to dinner while I was testing recipes asked/dropped hints/begged for butter chicken. I cut down the amount of cream, so it isn’t as heavy, and added some—not traditional but highly recommended—puréed chipotle chiles in adobo sauce for a deeper, more complex, smokier flavor. ",
            preparation: {
                time: "10 min",
                ingredients: [
                    
                ],
                procedure: [
                    "Trim the excess fat from the chicken and put the pieces in a large bowl.",
                    "Place a medium nonstick saucepan over medium heat and add the oil. When small bubbles appear at the bottom of the pan, add the cinnamon, cloves, and cardamom, and sauté for 1 minute. When the spices change color and are fragrant, add the onions and sauté for 3 to 4 minutes or until golden brown. Add the ginger paste and garlic paste, and sauté for 2 to 3 minutes, stirring continuously.",
                    "Add the turmeric, coriander, cumin, and chile powder. Stir well.",
                    "Add the tomatoes and sauté for 3 to 4 minutes, stirring continuously. Cook for 7 to 8 minutes or until the oil comes to the top.",
                    "Add the chicken and salt, and stir. Increase the heat to high and sauté for 5 minutes or until the chicken pieces are well coated with the sauce. Add 1½ cups (300 ml) water and bring to a boil. Lower the heat to low, cover, and cook for 10 minutes or until the chicken is cooked through.",
                    "Transfer to a serving bowl. Sprinkle with the garam masala and garnish with the cilantro. Serve hot."
                ]
            },
            isFavourite: false
        },
        {
            id: 5,
            name: "Sindhi Biryani",
            image: Sindhi_Biryani,
            description: "The Sindhi people originally came from northwest India, which became part of Pakistan in the 1947 partition. Many of them moved south in order to stay in India, where they continue to celebrate their culture through dishes like this biryani. Since many Sindhis are also Muslims, lamb is used in this dish, while saffron, dates and almonds highlight the Persian influence of the Mughal Empire. This dish is rich and full of flavor; it’s really nice for a special-occasion dinner.",
            preparation: {},
            isFavourite: false
        },
        {
            id: 6,
            name: "Matar with Feta",
            image: Matar_with_Feta,
            description: "Traditional matar paneer—or peas and cheese, as we called it growing up—has a dark, rich tomato gravy and cubes of paneer amid a bowl of stewed peas. Think of this dish as traditional matar paneer’s cousin who spent a summer backpacking through Greece. This version is light on the gravy so you taste more of the clean, sweet flavors of the peas, accentuated by the light, floral flavor of coriander. Cubed feta adds a little tanginess and the lemon and mint give it a green brightness, making this a colorful spring-y side dish for any meal.",
            preparation: {},
            isFavourite: false
        },
        {
            id: 7,
            name: "Stewed Split Red Lentils",
            image: Stewed_Split_Red_Lentils,
            description: "Hearty as can be, this recipe for Stewed Split Red Lentils is just the recipe you need for those hectic weeknights — especially after a long day of work, school, and running errands. You'll love warming up with a bowl of this tasty vegetarian recipe for lentil stew on cold winter days, too. If you'd like, you can even freeze the leftovers to eat at a later time. Tips on how to reheat this dish are also posted below the recipe's instructions — you will only need just a little bit of time to reheat it correctly. If you always thought that vegetarian cooking was bland, then you need to try this recipe for a change of pace that everyone in your household will love!",
            preparation: {
                time: "10 min",
                ingredients: [
                    "1 (1¾-pound/800-gram) chicken, skinned and cut into 12 pieces",
                    "¼ cup (50 ml) vegetable oil",
                    "1-inch (2½-cm) cinnamon stick",
                    "4 or 5 cloves",
                    "4 or 5 green cardamom pods",
                    "4 medium red onions, grated",
                    "1 tablespoon fresh ginger paste",
                    "1 tablespoon fresh garlic paste",
                    "½ teaspoon ground turmeric",
                    "1½ tablespoons ground coriander",
                    "1½ teaspoons ground roasted cumin (see Notes)",
                    "1 teaspoon red chile powder",
                    "4 medium tomatoes, puréed",
                    "1½ teaspoons table salt",
                    "1 teaspoon garam masala",
                    "1 tablespoon chopped fresh cilantro"
                ],
                procedure: [
                    
                ]
            },
            isFavourite: false
        }
    ],
    favourites: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            const tempRecepies = [];
            const tempFav = [];
            state.recepies.map(recepie => (
                tempRecepies.push(Object.assign({}, recepie))
            ));
            state.favourites.map(fav => (
                tempFav.push(Object.assign({}, fav))
            ));
            for(let i=0;i<tempRecepies.length;i++) {
                if(tempRecepies[i].id === action.id) {
                    tempRecepies[i].isFavourite = !tempRecepies[i].isFavourite
                    tempFav.push(tempRecepies[i]);
                    break;
                }
            }
            return {
                ...state,
                recepies: tempRecepies,
                favourites: tempFav
            };
        case REMOVE_FROM_FAVOURITES:
            const temp1Recepies = [];
            const temp1Fav = [];
            state.recepies.map(recepie => (
                temp1Recepies.push(Object.assign({}, recepie))
            ));
            state.favourites.map(fav => (
                temp1Fav.push(Object.assign({}, fav))
            ));
            for(let i=0;i<temp1Recepies.length;i++) {
                if(temp1Recepies[i].id === action.id) {
                    temp1Recepies[i].isFavourite = !temp1Recepies[i].isFavourite
                    break;
                }
            }
            const newFav = temp1Fav.filter((item) => item.id !== action.id);
            return {
                ...state,
                recepies: temp1Recepies,
                favourites: newFav
            };
        default: return state
    }
}

export default cartReducer;