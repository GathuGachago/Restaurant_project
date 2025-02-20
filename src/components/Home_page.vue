<template>
    <v-card class="mx-auto" elevation="24">
      <v-carousel hide-delimiters>
            <v-carousel-item src="/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay (1)" cover> </v-carousel-item>
            <v-carousel-item src="./../assets/pexels-asadphoto-1449773.jpg" cover> </v-carousel-item>
            <v-carousel-item src="./../assets/pexels-narda-yescas-724842-1566837.jpg" cover> </v-carousel-item>
            <v-carousel-item src="/src/assets/pexels-lawrencesuzara-1581554.jpg" cover> </v-carousel-item>
        </v-carousel>

    </v-card>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card color="#000000">
                            <v-card-item>
                                <v-card-title>New Menu</v-card-title>

                                <v-card-subtitle>Coming in hot this week</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="https://unsplash.com/photos/a-car-driving-down-a-snow-covered-street-pkmEdKpFM4k" cover ></v-img>

                            <v-card-text>
                            The New Menu is coming in hot this week. Be sure to check out our new dishes and drinks.Introducing the new tantalizing cherry milkshake and more
                            </v-card-text>
                        </v-card>
                        <v-card color="#212121">
                            <v-card-item>
                            <v-card-title>Cocktails Everyone!!!</v-card-title>

                            <v-card-subtitle>Fantastic Fridays.Buy one cocktail get one free</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover ></v-img>

                            <v-card-text>
                           free Cocktails for averyone on Fridays. Buy one cocktail get one free. Come and enjoy our fantastic cocktails
                            </v-card-text>
                        </v-card>
                    </v-card>

                </v-col>

                <v-col cols="12" md="4">
                    <v-card>
                    <v-card color="#000000">
                    <v-card-item>
                    <v-card-title>Karaoke</v-card-title>

                    <v-card-subtitle>Karaoke Night</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover ></v-img>

                    <v-card-text>
                    Karaoke Night is coming up. Be sure to come and enjoy the night with your friends and family. Sing your heart out and win amazing prizes
                    </v-card-text>
                    </v-card>
                    <v-card color="#212121">
                    <v-card-item>
                    <v-card-title>Events</v-card-title>

                    <v-card-subtitle>Jazz Night</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover ></v-img>

                    <v-card-text>
                    Jazz Night is coming up. Be sure to come and enjoy the night with your friends and family. Listen to the best jazz music
                    </v-card-text>
                    </v-card>
                </v-card>

                </v-col>

                <v-col cols="12" md="4">
                    <v-card>
                        <v-card color="#000000">
                    <v-card-item>
                    <v-card-title>Deals Deals Deals</v-card-title>

                    <v-card-subtitle>Happy Hour Deals</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover ></v-img>

                    <v-card-text>
                    Happy Hour Deals are here. Be sure to come and enjoy our happy hour deals. Get amazing discounts on drinks and food
                    </v-card-text>
                        </v-card>
                        <v-card color="#212121">
                    <v-card-item>
                    <v-card-title>Promotions</v-card-title>

                    <v-card-subtitle>Secret Menu</v-card-subtitle>
                    </v-card-item>
                    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover ></v-img>

                    <v-card-text>
                    The Secret Menu is here. Ask your waiter for the secret menu    
                    </v-card-text>
                        </v-card>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
        </v-card>
    </v-container>
    
    import { createApp } from 'vue'
import App from './App.vue'
import router from'./router'
import '@mdi/font/css/materialdesignicons.css'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  })

createApp(App).use(router).use(vuetify).mount('#app')
</template>

<script setup>

</script>