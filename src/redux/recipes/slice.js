import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByCategory, fetchCategory } from './operations'

const initialState = {
    recipes: [{
        _id: '6462a8f74c3d0ddd28897fb8',
        title: 'Mediterranean Pasta Salad',
        category: 'Beef',
        area: 'Italian',
        instructions:
            'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
        description:
            'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
        thumb:
            'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
        preview:
            'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg',
        time: '27',
        youtube: 'https://www.youtube.com/watch?v=e52IL8zYmaE',
        tags: ['Pasta', 'Baking'],
        ingredients: [
            {
                id: '640c2dd963a319ea671e3724',
                measure: '200 g',
            },
            {
                id: '640c2dd963a319ea671e3663',
                measure: '250 g',
            },
            {
                id: '640c2dd963a319ea671e36dd',
                measure: '1  bunch',
            },
            {
                id: '640c2dd963a319ea671e36cf',
                measure: '350 g',
            },
            {
                id: '640c2dd963a319ea671e36cd',
                measure: '3  tablespoons',
            },
            {
                id: '640c2dd963a319ea671e36f3',
                measure: '40 g',
            },
            {
                id: '640c2dd963a319ea671e3781',
                measure: '200 g',
            },
            {
                id: '640c2dd963a319ea671e375e',
                measure: 'to taste',
            },
            {
                id: '640c2dd963a319ea671e373f',
                measure: 'to taste',
            },
        ],
    },
    {
        _id: '6462a8f74c3d0ddd28897fb9',
        title: 'Lamb tomato and sweet spices',
        category: 'Dessert',
        area: 'Moroccan',
        instructions:
            "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander.",
        description:
            'A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.',
        thumb:
            'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
        preview:
            'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg',
        time: '90',
        youtube: 'https://www.youtube.com/watch?v=vaZb1MnFBgA',
        tags: [''],
        ingredients: [
            {
                id: '640c2dd963a319ea671e372c',
                measure: '2 tbsp',
            },
            {
                id: '640c2dd963a319ea671e36e8',
                measure: '4cm piece finely chopped',
            },
            {
                id: '640c2dd963a319ea671e36e3',
                measure: '2 cloves peeled and chopped',
            },
            {
                id: '640c2dd963a319ea671e377f',
                measure: '800g peeled and chopped ',
            },
            {
                id: '640c2dd963a319ea671e3712',
                measure: '2 tbsp',
            },
            {
                id: '640c2dd963a319ea671e3687',
                measure: '1 tsp',
            },
            {
                id: '640c2dd963a319ea671e378d',
                measure: '50',
            },
            {
                id: '640c2dd963a319ea671e36d0',
                measure: '1 large',
            },
            {
                id: '640c2dd963a319ea671e370d',
                measure: '400g',
            },
            {
                id: '640c2dd963a319ea671e37ae',
                measure: '1 medium',
            },
            {
                id: '640c2dd963a319ea671e3669',
                measure: '2 tbsp',
            },
            {
                id: '640c2dd963a319ea671e36a0',
                measure: '2 tbsp',
            },
            {
                id: '640c2dd963a319ea671e36af',
                measure: '2 tbsp chopped',
            },
            {
                id: '640c2dd963a319ea671e36a5',
                measure: '½ tsp ground ',
            },
        ],
    }],
    category: [],
    totalPages: 0,
    currentPage: 1,
    loading: false,
    error: null,
    filter: 'Beef'
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.fulfilled, (state, { payload }) => {
                state.category = payload;
                state.loading = false;
            })
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(fetchRecipesByCategory.fulfilled, (state, { payload }) => {
                state.recipes = payload.recipes;
                state.currentPage = payload.currentPage;
                state.totalPages = payload.totalPages;
                state.loading = false;
            })
            .addCase(fetchRecipesByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipesByCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { setFilter } = categoriesSlice.actions;
export default categoriesSlice.reducer;