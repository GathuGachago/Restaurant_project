<template>
     <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
    
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                    
                        <v-card color="#000000">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="https://unsplash.com/photos/a-car-driving-down-a-snow-covered-street-pkmEdKpFM4k" cover ></v-img>

                            <v-card-text>
                            {{ item.price }}
                            </v-card-text>
                        </v-card>
                        </v-col>
                        </v-row>
                        </v-container>
                        </v-card>
                        </v-container>
                
</template>


<script setup>
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {   
        name: "Burger",
        price: 100, 
        description: "Best burgers in town",
        size: "Large",   
        offers: "None",
        image: "https://unsplash.com/photos/cheeseburger-on-white-ceramic-plate-7LbJgJvUvZI"

    },
    {
        name: "Pizza",
        price: 300,
        description: "Best pizza in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/pizza-on-white-ceramic-plate-7LbJgJvUvZI"
    },
    {
        name: "Pasta",
        price: 200, 
        description: "Best pasta in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/pasta-on-white-ceramic-plate-7LbJgJvUvZI"
    },
    {
        name: "Chicken",
        price: 150,
        description: "Best chicken in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/chicken-on-white-ceramic-plate-7LbJgJvUvZI"
    },
    {
        name: "Fish",
        price: 200,
        description: "Best fish in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/fish-on-white-ceramic-plate-7LbJgJvUvZI"
    }

]

</script>