const recipes = [
  {
    id: 1,
    title: "Classic Banana Bread",
    price: "$15.00",
    description:
      "A traditional banana bread recipe with a rich, moist texture.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.thechunkychef.com/wp-content/uploads/2020/04/Classic-Banana-Bread-cut.jpg",
  },
  {
    id: 2,
    title: "Chocolate Chip Banana Bread",
    price: "$18.00",
    description:
      "A delicious twist on classic banana bread with chocolate chips.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup chocolate chips",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in chocolate chips.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://preppykitchen.com/wp-content/uploads/2019/10/Chocolate-Chip-Banana-Bread-Feature.jpg",
  },
  {
    id: 3,
    title: "Nutella Swirl Banana Bread",
    price: "$5.00",
    description:
      "Banana bread with a swirl of Nutella for a rich, chocolatey flavor.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup Nutella",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour half of the batter into the prepared loaf pan.
      8. Drop spoonfuls of Nutella over the batter and swirl with a knife.
      9. Pour the remaining batter over the Nutella and swirl again.
      10. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      11. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://i0.wp.com/zoebakes.com/wp-content/uploads/2014/01/nutellabananabread-zb-15.jpg?w=648&ssl=1",
  },
  {
    id: 4,
    title: "Walnut Banana Bread",
    price: "$16.00",
    description: "Banana bread with crunchy walnuts for added texture.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup chopped walnuts",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in chopped walnuts.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/x17/2000/may/20643-walnut-banana-bread-600x600.jpg?ext=.jpg",
  },
  {
    id: 5,
    title: "Blueberry Banana Bread",
    price: "$12.00",
    description: "Banana bread with fresh blueberries for a fruity twist.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup fresh blueberries",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in blueberries.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://juliasalbum.com/wp-content/uploads/2018/06/pin-blueberry-banana-bread-5.jpg",
  },
  {
    id: 6,
    title: "Peanut Butter Banana Bread",
    price: "$17.00",
    description: "Banana bread with a rich peanut butter flavor.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1/2 cup peanut butter",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter and peanut butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2022/10/Peanut-Butter-Lovers-Banana-Bread-4-750x750.jpg",
  },
  {
    id: 7,
    title: "Pumpkin Banana Bread",
    price: "$18.00",
    description: "Banana bread with pumpkin and warm spices.",
    ingredients: [
      "3 ripe bananas",
      "1 cup canned pumpkin",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/2 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1/4 tsp salt",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in canned pumpkin and melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda, cinnamon, nutmeg, and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.loveandoliveoil.com/wp-content/uploads/2022/11/pumpkin-banana-bread-FEAT-1200x800.jpg",
  },
  {
    id: 8,
    title: "Coconut Banana Bread",
    price: "$20.00",
    description: "Banana bread with shredded coconut for a tropical touch.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup shredded coconut",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in shredded coconut.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.twopeasandtheirpod.com/wp-content/uploads/2019/02/coconut-banana-bread-2.jpg",
  },
  {
    id: 9,
    title: "Apple Cinnamon Banana Bread",
    price: "$10.00",
    description: "Banana bread with apples and cinnamon for a cozy flavor.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 apple (peeled and diced)",
      "1 tsp cinnamon",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda, salt, and cinnamon over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in diced apple.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.justataste.com/wp-content/uploads/2015/10/apple-cinnamon-banana-bread-recipe-2022.jpg",
  },
  {
    id: 10,
    title: "Strawberry Banana Bread",
    price: "$15.00",
    description:
      "Banana bread with fresh strawberries for a sweet and fruity touch.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup diced fresh strawberries",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in diced strawberries.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://feelgoodfoodie.net/wp-content/uploads/2016/10/Strawberry-Banana-Bread-11.jpg",
  },
  {
    id: 11,
    title: "Raspberry Banana Bread",
    price: "$12.00",
    description: "Banana bread with raspberries for a tart and sweet flavor.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup fresh raspberries",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in raspberries.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://thebigmansworld.com/wp-content/uploads/2020/09/raspberry-bread2.jpg",
  },
  {
    id: 12,
    title: "Zucchini Banana Bread",
    price: "$13.00",
    description: "A healthy banana bread with zucchini for extra moisture.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1 cup grated zucchini (squeezed dry)",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Fold in grated zucchini.
      8. Pour the batter into the prepared loaf pan.
      9. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      10. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://krollskorner.com/wp-content/uploads/2024/03/zucchinibananabreadwithvanillabeanbrownbutterglaze-21-1024x1536.jpg",
  },
  {
    id: 13,
    title: "Espresso Banana Bread",
    price: "$14.00",
    description:
      "Banana bread with a hint of espresso for a coffee-flavored twist.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "2 tbsp espresso powder",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter and espresso powder.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/599ffa88cd0f68882d4efcbd/1547696772125-DRTG4E7APY7U9AQAJ06S/DSC_5309WEB.jpg?format=1500w",
  },
  {
    id: 14,
    title: "Maple Banana Bread",
    price: "$23.00",
    description: "Banana bread with a hint of maple syrup for extra sweetness.",
    ingredients: [
      "3 ripe bananas",
      "1 1/2 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
      "1/4 cup maple syrup",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter and maple syrup.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add flour and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.allrecipes.com/thmb/tExF-U0LvscJ98Hq9O_Etm1NMJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/364125-a939931d21ad407cb360c50d168eb96b.jpg",
  },
  {
    id: 15,
    title: "Almond Banana Bread",
    price: "$25.00",
    description: "Banana bread with almond flour for a nutty flavor.",
    ingredients: [
      "3 ripe bananas",
      "1 cup all-purpose flour",
      "1/2 cup almond flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter (melted)",
      "2 large eggs",
      "1 tsp baking soda",
      "1/4 tsp salt",
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan.
      2. In a large bowl, mash the bananas with a fork until smooth.
      3. Stir in melted butter.
      4. Mix in sugar, eggs, and vanilla extract.
      5. Sprinkle baking soda and salt over the mixture and mix in.
      6. Add both flours and stir until just combined.
      7. Pour the batter into the prepared loaf pan.
      8. Bake for 60 minutes, or until a toothpick inserted into the center comes out clean.
      9. Let cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.
    `,
    imageUrl:
      "https://www.ambitiouskitchen.com/wp-content/uploads/2020/01/Nourishing-Almond-Flour-Banana-Bread-4.jpg",
  },
];

export default recipes;