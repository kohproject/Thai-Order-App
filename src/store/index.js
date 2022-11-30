import { createStore } from "vuex";

export default createStore({
  state: {
    $body: document.getElementById("body"),
    tipAmount: 0.0,
    initPrice: 0.0,
    modalPrice: 0.0,
    modalExtra: 0,
    modalQty: 1,
    editCartItem: null,
    selectedModal: null,
    modalOptions: null,
    modalUserChoose: null,
    modalResetBool: false,
    isEditModal: false,
    isMobile: false,
    salesTax: 0.05,
    restaurant:{
      name:"Siam Eats",
      address:"5204 N Clark St, Chicago, IL 60640"
    },
    cart: {
      items: [],
      length: 0,
    },
    tipbar: [
      { percentage: 10, status: false },
      { percentage: 15, status: false },
      { percentage: 18, status: false },
      { percentage: 20, status: false },
      { percentage: 25, status: false },
      { percentage: 0, status: false },
    ],
    regUsers: [
      {
        email: "junk@junk.com",
        pass: "junktest",
      },
      {
        email: "junk2@junk.com",
        pass: "junktest2",
      },
    ],
    regUserObj: {
      registered: false,
      firstname: "registedNameGuy",
      lastname: "",
      orders: [],
      address: [],
    },
    userSignup: {
      user: [
        {
          names: [
            {
              name: "firstname",
              type: "text",
              label: "first name",
              actStatus: false,
              value: "",
            },
            {
              name: "lastname",
              type: "text",
              label: "last name",
              actStatus: false,
              value: "",
            },
          ],
        },
        {
          creds: [
            {
              name: "phone",
              type: "phone",
              label: "phone",
              actStatus: false,
              value: "",
            },
            {
              name: "email",
              type: "email",
              label: "email",
              actStatus: false,
              value: "",
            },
            {
              name: "password",
              type: "password",
              label: "password",
              actStatus: false,
              value: "",
            },
          ],
        },
      ],
    },
    fullMenu2: [
      {
        section: "entrees",
        menu: [
          {
            title: "itm1",
            name: "Sukiyaki Spicy",
            count: 1,
            desc: "Stir-fried glass noodle, shrimps, egg, cabbage, onchoy, celery with signature spicy sukiyaki sauce. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm2",
            name: "Udon Pad Khee Mao Shrimp Spicy",
            count: 1,
            desc: "Stir-fried thick wheat flour noodle with shrimps, carrot, bell pepper, tomato, green bean, baby corn, basil and hot chili peppers. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm3",
            name: "Tom Yum Fried Rice Shrimp Spicy",
            count: 1,
            desc: "Carrot, mushroom, onions, tomato, basil, lime leaf with signature tom yum chili paste. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm4",
            name: "Seafood Pad Cha Spicy",
            count: 1,
            desc: "Stir-fried shrimps, green mussels, squids, carrot, bell pepper, green bean, baby corn, mushroom, basil, onions, finger root, baby pepper, and hot chili pepper. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm5",
            name: "Signature Pad Thai",
            count: 1,
            desc: "Stir-fried glass noodle in traditional Thai sauce with shrimps, egg, green onion, bean sprout, radish, chopped peanut and lime.",
            price: 16,
            initPrice: 16,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm6",
            name: "Pad Cha Catfish Spicy",
            count: 1,
            desc: "Crispy catfish stir fried with carrot, bell pepper, green bean, baby corn, mushroom, basil, onions, finger root, baby pepper, and hot chili pepper. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm7",
            name: "Green Curry Fish Ball Pasta Spicy",
            count: 1,
            desc: "Coconut milk, fish balls, bamboo shoots, Thai eggplant, bell peppers, carrot and basil served with Thai vermicelli noodle. Spicy.",
            price: 16,
            initPrice: 16,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm8",
            name: "Pepper Steak",
            count: 1,
            desc: "Bell peppers stir-fried with tender beef, onions, baby corn, tomato and jalapeno in medium spicy gravy. Spicy.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm9",
            name: "Keang Phed Ped Yang Spicy",
            count: 1,
            desc: "Spicy red curry with roasted duck, pineapple, green peas, tomato and basil. Spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm10",
            name: "Black Pepper Catfish",
            count: 1,
            desc: "Crispy catfish in medium spicy gravy with bell peppers, onions, baby corn, tomato, and jalapeno. Spicy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm11",
            name: "Khao Soy",
            count: 1,
            desc: "Steamed egg noodle with chicken drum stick in Northern coconut yellow curry style, red onion, cilantro, pickle cabbage, lime.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm12",
            name: "Choo Chee Curry Green Mussle Spicy",
            count: 1,
            desc: "Thai home style creamy coconut curry with red curry based, kaffir lime leaf, garnish with bell pepper and basil.",
            price: 16,
            initPrice: 16,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "appetizers",
        menu: [
          {
            title: "itm17",
            name: "Baby Egg Rolls",
            count: 1,
            desc: "Tiny egg rolls filled with chicken, shrimp, black mushroom and bean thread noodles.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm18",
            name: "Chicken Satay",
            count: 1,
            desc: "Thai famous appetizer marinated in light curry, served with delicious peanut sauce and cucumber salad.",
            price: 12,
            initPrice: 12,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm19",
            name: "Spring Rolls",
            count: 1,
            desc: "Fresh rolls with cucumber, bean sprout, egg and tofu, served with special homemade sauce.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm20",
            name: "Shumai",
            count: 1,
            desc: "Steamed shrimp and pork dumplings served with special intense medium spicy soy sauce.",
            price: 10,
            initPrice: 10,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm21",
            name: "Pot Stickers",
            count: 1,
            desc: "Wheat flour pastries filled with chicken and vegetables, served with delicious sesame sauce.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm22",
            name: "Edamame",
            count: 1,
            desc: "Soy bean mixed with salt.",
            price: 7.5,
            initPrice: 7.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm23",
            name: "Crab Rangoon",
            count: 1,
            desc: "Crab meat, cream cheese and celery in a crispy wonton served with sweet and sour sauce",
            price: 9,
            initPrice: 9,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm24",
            name: "Fried Tofu",
            count: 1,
            desc: "Deep fried tofu served with special sweet and sour sauce with chopped peanuts",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm25",
            name: "Chive Dumplings",
            count: 1,
            desc: "Pan fried vegetable dumpling served with special intense soy sauce.",
            price: 7.5,
            initPrice: 7.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm26",
            name: "Grilled Squid",
            count: 1,
            desc: "Spicy Thai style grilled squid with spicy Thai seafood sauce.",
            price: 15,
            initPrice: 16,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm27",
            name: "Mooping",
            count: 1,
            desc: "Grilled marinated pork with spicy tamarind chili sauce.",
            price: 11,
            initPrice: 11,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm28",
            name: "Chicken Wing",
            count: 1,
            desc: "Deep fried chicken wings served with sweet and sour sauce.",
            price: 12,
            initPrice: 12,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm29",
            name: "Crispy Wonton",
            count: 1,
            desc: "Fried dumpling filled with chicken and shrimp, served with sweet and sour sauce.",
            price: 7.5,
            initPrice: 7.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm30",
            name: "Bangkok WrapSpicy",
            count: 1,
            desc: "Mackerel, mint, basil, lettuce, cilantro and Thai vermicelli noodle with special homemade sauce. Hot and spicy.",
            price: 9,
            initPrice: 9,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "soups",
        menu: [
          {
            title: "itm31",
            name: "Tom Yum Soup",
            count: 1,
            desc: "Hot and sour soup with lemongrass, lime leaf, tomato, onions and mushrooms. Hot and spicy.",
            price: 10.75,
            initPrice: 10.75,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm32",
            name: "Tom Kha Soup",
            count: 1,
            desc: "Pure coconut milk with tomato, mushrooms, onions and lemongrass. Hot and spicy.",
            price: 10.75,
            initPrice: 10.75,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm33",
            name: "Won Ton Soup",
            count: 1,
            desc: "Wontons filled with shrimp and chicken, napa cabbage and green onion in a clear chicken broth.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm34",
            name: "Veggies Soup",
            count: 1,
            desc: "Bean curd cakes and mix vegetables in clear broth.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "salad",
        menu: [
          {
            title: "itm35",
            name: "Cucumber Salad",
            count: 1,
            desc: "Cucumber, red onion and carrot in clear sweet and sour vinaigrette.",
            price: 7,
            initPrice: 7,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm36",
            name: "Seaweed Salad",
            count: 1,
            desc: "Japanese seaweed and cucumber in clear sweet and sour vinaigrette.",
            price: 8,
            initPrice: 8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm37",
            name: "Chicken Salad Spicy",
            count: 1,
            desc: "Ground chicken mixed with onion, hot pepper, carrot and mint with medium spicy dressing. Hot and spicy.",
            price: 12.75,
            initPrice: 12.75,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm38",
            name: "Beef Salad (Nam Tok) Spicy",
            count: 1,
            desc: "Grilled sliced beef mixed with onion, cilantro and mint, served with medium spicy dressing. Hot and spicy.",
            price: 13.75,
            initPrice: 13.75,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm39",
            name: "Papaya Salad (Som Tum) Spicy",
            count: 1,
            desc: "Shredded green papaya with shrimps, garlic, green bean, tomato and lime. Hot and spicy.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm40",
            name: "Woon Sen Salad Spicy",
            count: 1,
            desc: "Steamed bean thread noodles, red onion, green onion and ground chicken with medium spicy dressing. Hot and spicy.",
            price: 15,
            initPrice: 15,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "noodle",
        menu: [
          {
            title: "itm41",
            name: "Pad Thai,",
            count: 1,
            desc: "Stir fried thin rice noodle in traditional Thai sauce with eggs, green onion, bean sprout, chopped peanuts and lime.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm42",
            name: "Pad Khee MaoSpicy",
            count: 1,
            desc: "Stir fried wide rice noodles with carrot, baby corn, tomato, basil, bell peppers, green bean and hot chili peppers. Hot and spicy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm43",
            name: "Pad Woon Sen",
            count: 1,
            desc: "Stir fried glass noodles, egg, carrot, green onion, green peas and bean sprout.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm44",
            name: "Pad See Eiw",
            count: 1,
            desc: "Stir fried wide rice noodle with egg and broccoli in sweet soy sauce.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm45",
            name: "Lard Nar",
            count: 1,
            desc: "Crispy wide noodles, egg and broccoli in tasty gravy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "rice",
        menu: [
          {
            title: "itm46",
            name: "Broccoli Rice",
            count: 1,
            desc: "Broccoli and shredded ginger in a tasty gravy. Served with white jasmine rice.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm47",
            name: "Basil RiceSpicy",
            count: 1,
            desc: "Choice of ground meat, basil leaf, onions, garlic, green bean and jalapenos. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm48",
            name: "Thai Fried Rice",
            count: 1,
            desc: "Egg, white and green onions, carrot, green peas, tomato, garlic and lime. Served with white jasmine rice.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm49",
            name: "Curry Fried Rice Spicy",
            count: 1,
            desc: "Carrot, basil leafs and mushroom, seasoned with special curry paste. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm50",
            name: "Mixed Vegetables",
            count: 1,
            desc: "Stir fried mixed vegetables in light garlic sauce. Served with white jasmine rice.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm51",
            name: "Cashew Nut Spicy",
            count: 1,
            desc: "Cashew nut, tomato, carrot, bell peppers, white onions, mushroom, pineapple and dry hot pepper in our homemade sauce. Served with white jasmine rice. Hot and spicy.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm52",
            name: "Rama",
            count: 1,
            desc: "Steamed broccoli topped with peanut sauce and carrot. Served with white jasmine rice.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm53",
            name: "Sweet and Sour Rice",
            count: 1,
            desc: "Pineapple, white onion, bell peppers, carrot, cucumber and tomato in sweet and sour sauce. Served with white jasmine rice.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm54",
            name: "Sweet and Sour Crispy Noodle",
            count: 1,
            desc: "Pineapple, white onion, bell peppers, carrot, cucumber and tomato in sweet and sour sauce",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm55",
            name: "Kanar Moo Krob",
            count: 1,
            desc: "Roasted pork, Chinese broccoli and garlic in oyster sauce. Served with white jasmine rice.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm56",
            name: "Kra Proa Moo KrobSpicy",
            count: 1,
            desc: "Basil leaf, garlic, hot pepper, mushroom, bell pepper, green bean, jalapeno and roasted pork. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm57",
            name: "Pad Prik Spicy",
            count: 1,
            desc: "Bamboo shoots, carrot, white onion, basil leaf, bell pepper, hot pepper and jalapeno with medium spicy curry paste. Served with white jasmine rice. Hot and spicy.",
            price: 13,
            initPrice: 13,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "curry",
        menu: [
          {
            title: "itm58",
            name: "Panang CurrySpicy",
            count: 1,
            desc: "Coconut milk, bell peppers, carrots and lime leaf. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm59",
            name: " Green Curry Spicy",
            count: 1,
            desc: "Coconut milk, bamboo shoots, Thai eggplant, bell peppers and carrots. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm60",
            name: "Red Curry Spicy",
            count: 1,
            desc: "Coconut milk, bamboo shoots, fresh basil, bell peppers and carrots. Served with white jasmine rice. Hot and spicy.",
            price: 14,
            initPrice: 14.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm61",
            name: "Massaman Curry",
            count: 1,
            desc: "Thai traditional yellow curry in coconut milk, potatoes, with peanuts and white onions. Served with white jasmine rice.",
            price: 14,
            initPrice: 14.5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "deserts",
        menu: [
          {
            title: "itm62",
            name: "Coconut Thai Custard",
            count: 1,
            desc: "Light creamy pastry with coconut creme filling",
            price: 5,
            initPrice: 5,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
      {
        section: "beverage",
        menu: [
          {
            title: "itm63",
            name: "Hot Tea",
            count: 1,
            desc: null,
            price: 2.8,
            initPrice: 2.8,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm64",
            name: "Thai Iced Tea",
            count: 1,
            desc: null,
            price: 4.05,
            initPrice: 4.05,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm65",
            name: "Thai Iced Coffee",
            count: 1,
            desc: null,
            price: 4.05,
            initPrice: 4.05,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm66",
            name: "Soda",
            count: 1,
            desc: null,
            price: 1.95,
            initPrice: 1.95,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
          {
            title: "itm67",
            name: "San Pellegrino",
            count: 1,
            desc: null,
            price: 3.05,
            initPrice: 3.05,
            options: [
              {
                title: "Make it Gluten Free",
                selection: {
                  type: "toggle",
                  name: "gluten",
                  list: [{ name: "gluten free", extra: null, status: false }],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Choose One Protein",
                selection: {
                  type: "radio",
                  name: "choose1",
                  list: [
                    { name: "chicken", extra: null, status: false },
                    { name: "pork", extra: null, status: false },
                    { name: "beef", extra: 1.0, status: false },
                    { name: "tofu", extra: null, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: true,
              },
              {
                title: "Add On(s)",
                selection: {
                  type: "check",
                  name: "addon",
                  list: [
                    { add: "extra meat", extra: 2.0, status: false },
                    { add: "extra rice", extra: 1.0, status: false },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
              {
                title: "Special Instructions",
                selection: {
                  type: "sptextarea",
                  name: "special",
                  list: [
                    {
                      name: "special instructions",
                      extra: null,
                      status: false,
                    },
                  ],
                },
                sectVal: null,
                extraVal: null,
                required: false,
              },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    SETNEWUSER(state, payload) {
      let uSignup = state.userSignup;
      uSignup = payload.firstname;
      uSignup.firstname = payload.firstname;
      uSignup.lastname = payload.lastname;
      uSignup.phone = payload.phone;
      uSignup.email = payload.email;
      uSignup.password = payload.password;
      uSignup.promoStatus = payload.promoStatus;
    },
    SETRESETBOOL(state, payload) {
      state.modalResetBool = payload;
    },
    SETMODALQTY(state, payload) {
      state.modalQty = payload;
    },
    SETMODALSELECT(state, payload) {
      state.selectedModal = payload;
    },
    SUBITEMPRICE(state, payload) {
      state.modalPrice = state.modalPrice - payload;
    },
    PUSHCHECKOUTARRAY(state, payload) {
      state.cart.items.unshift(payload);
    },
    UPDATECART(state, payload) {
      state.cart.items = payload;
    },
    SETUSERCHOOSE(state, payload) {
      state.modalUserChoose = payload;
    },
    SETTIPAMOUNT(state, payload) {
      state.tipAmount = payload;
    },
    SETISEDIT(state, payload) {
      state.isEditModal = payload;
    },
    SETBODYMODAL(state, payload) {
      payload === null
        ? (state.$body.className = "")
        : state.$body.classList.add(payload);
    },
    SETINITPRICE(state, payload) {
      state.initPrice = payload;
    },
    SETMODALPRICE(state, payload) {
      state.modalPrice = payload;
    },
    SETMODALEXTRA(state, payload) {
      state.modalExtra = payload;
    },
    SETMODALFORMOPTIONS(state, payload) {
      state.modalOptions = payload;
    },
    SETISMOBILE(state, payload) {
      state.isMobile = payload;
    },
    SETREGISTEREDUSER: (state, payload) => {
      state.regUserObj.registered = payload;
    },
    SETCARTEDITITEM: (state, payload) => {
      state.editCartItem = payload;
    },
    SETCART(state, payload) {
      state.cart = payload;
    }
 
  },
  getters: {
    GETCART(state) {
      return state.cart;
    },
    GETLOGINUSER(state) {
      return state.userSignup;
    },
    GETBODYCLASSES(state) {
      return state.$body.classList.toString();
    },
    GETMODALSELECT(state) {
      // console.log(state.selectedModal);
      return state.selectedModal;
    },
    GETUSERCHOOSE(state) {
      return state.modalUserChoose;
    },
    GETMODALEXTRA(state) {
      return state.modalExtra;
    },
    GETMODALQTY(state) {
      return state.modalQty;
    },
    GETINITPRICE(state) {
      return state.initPrice;
    },
    GETMODALPRICE(state) {
      return state.modalPrice;
    },
    GETMODALFORMOPTIONS(state) {
      return state.modalOptions;
    },
    GETMENU(state) {
      return state.fullMenu2;
    },
    GETREGISTEREDUSER(state) {
      return state.regUserObj;
    },
    GETTIPBAR(state) {
      return state.tipbar;
    },
    GETRESETBOOL(state) {
      return state.modalResetBool;
    },
    GETSALESTAX(state) {
      return state.salesTax;
    },
    GETISEDIT(state){
      return state.isEditModal;
    },
    GETRESTAURANT(state){
      return state.restaurant;
    },
    GETISMOBILE(state){
      return state.isMobile;
    }
  },
  actions: {
    // SETCARTTOTAL({commit},payload){
    //   console.log(payload);
    //   commit('SETITEMTOTAL',0)
    // },

    LOGINUSER({ state, commit }, payload) {
      let $bool = state.regUsers.some(
        (user) => user.email === payload.email && user.pass === payload.password
      );
      commit("SETREGISTEREDUSER", $bool);
    },
    // let extra =payload.options.reduce((partialSum, a) => partialSum + a.extraVal, 0);
    // if(!extra) extra = 0;
    // commit("SETMODALEXTRA",extra);

    CLOSEADDMODAL({ state, commit, dispatch }, payload) {
      if (state.editCartItem !== null) {
        let f2 = () => {
          dispatch("ADDCHECKOUT", state.editCartItem);
        };
        let f1 = async (f2) => {
          await new Promise((res) => {
            dispatch("EDITSELECTBOX", state.editCartItem);
            res();
          }).then(f2());
        };
        f1(f2);
        state.editCartItem = null;
        commit("SETMODALFORMOPTIONS", payload);
        commit("SETUSERCHOOSE", payload);
        commit("SETBODYMODAL", payload);
        return;
      }
      commit("SETMODALFORMOPTIONS", payload);
      commit("SETUSERCHOOSE", payload);
      commit("SETBODYMODAL", payload);
      return;
    },

    CALCULATEMODALPRICE({ state, commit }, price) {
      let extraVal = state.modalExtra ? state.modalExtra : 0;
      let mprice = Number(price) + extraVal;
      mprice = mprice * state.modalQty;

      commit("SETMODALPRICE", mprice);
    },

    SETUPDATECART({ commit, dispatch }, payload) {
      commit("UPDATECART", payload);
      dispatch("CALCULATECART");
    },

    ACTBODYMODAL({ commit }, payload) {
      payload.forEach((itm) => {
        commit("SETBODYMODAL", itm);
      });
    },

    ADDCHECKOUT({ commit, dispatch }, payload) {
      commit("PUSHCHECKOUTARRAY", payload);
      dispatch("CALCULATECART");
    },

    CALCULATECART({ state, commit }) {
      let obj = { length: 0, items: [] };
      let cartItms = state.cart.items;
      if (cartItms.length > 0) {
        state.cart.length = cartItms.length;
        obj.items = cartItms;
        // obj.items.forEach((itm,index) =>{
        //   itm.id = itm.name.replace(/\s+/g,'-')+'_'+index;
        // })
      }

      commit("SETCART", obj);
    },

    RESETSIGNUP({commit,dispatch},payload){
      let inps = document.querySelectorAll(".inp-login");

      inps.forEach((el) =>{el.value =''});
      commit("SETBODYMODAL",payload);
      dispatch("RESETFORMS");
    },

    RESETSTORE({ commit, dispatch }, payload) {
      dispatch("RESETFORMS");
      commit("SETMODALEXTRA", 0);
      commit("SETMODALQTY", 1);
      commit("SETRESETBOOL", true);
      commit("SETISEDIT", false);
      commit("SETBODYMODAL", payload);
      commit("SETUSERCHOOSE", payload);
    },
    RESETFORMS() {
      let inps = document.querySelectorAll(".inp-reset");
      inps.forEach((el) => {
        if (el.type === "textarea") {
          el.value = "";
        } else {
          el.checked = false;
        }
      });
    },
    EDITSELECTBOX({ commit, dispatch }, payload) {
      commit("SETISEDIT", true);
      commit("SETMODALQTY", payload.count);
      commit("SETINITPRICE", payload.initPrice);
      commit("SETUSERCHOOSE", payload.options);

      dispatch("SETMODALCHOOSE", payload);
    },

    SETMODALCHOOSE({ dispatch }, editItem) {
      editItem.options.map((itm) => {
        itm.id = editItem.id;
      });

      let reducedArr = editItem.options.filter(itm => itm.sectVal !== null);
      let fIterator = function(cl,funct){
        document.querySelectorAll('.'+cl).forEach(jtm =>{
           funct(jtm);
        })
      }
      
      reducedArr.forEach(itm =>{
          switch(itm.selection.type){
            case "radio":
              fIterator('rad',(jtm)=>{
                if(jtm.getAttribute('value') === itm.sectVal.value){
                  jtm.checked =true;
                 }
              });
            
            break;
            case "check":
              fIterator('chx', (jtm)=>{
                itm.sectVal.value.forEach(ktm =>{
                  if(jtm.getAttribute('value') === ktm.toString()){
                    jtm.checked =true;
                  }
                });
              });
            break;
            case "toggle":
              fIterator('switch', (jtm)=>{
                if(jtm.name ===itm.sectVal.value){
                  jtm.checked =true;
                }
              });
            break;

            case "sptextarea":
              document.getElementById('Special-Instructions').value=itm.sectVal.value        
            break;
          }
      })

      dispatch("SELECTBOX", editItem);
    },

    SETEDITEXTRAS({ commit }, optionsArr) {
      if (!optionsArr || optionsArr.length < 1) return;

      optionsArr.forEach((itm) => {
        // console.log(itm);
        switch (itm.chooseType) {
          case "checkbox":
            //console.log(itm);
            break;
          case "radio":
            // console.log(itm);
            break;
          case "toggle":
            // console.log(itm);
            break;
          case "textarea":
            break;
        }
      });
      let extVal = optionsArr.reduce((partialSum, a) => partialSum + a.extraVal,0);
      commit("SETMODALEXTRA", extVal);
    },

    SELECTBOX({ commit, dispatch }, payload) {
      commit("SETMODALFORMOPTIONS", payload.options);
      commit("SETMODALSELECT", payload);
      commit("SETRESETBOOL", false);

      dispatch("SETEDITEXTRAS", payload.options);
      dispatch("CALCULATEMODALPRICE", payload.initPrice);
      //setbody modalClass
      commit("SETBODYMODAL", "open-modal");
      commit("SETBODYMODAL", "modal-menu");
    },

    ACTRESETMODAL({ commit }) {
      commit("SETBODYMODAL");
    },
  },
  modules: {},
});
