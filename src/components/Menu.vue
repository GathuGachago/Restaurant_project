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
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                            {{ item.price }}
                            
                            </v-card-text>
                            <v-btn @click="addToOrder(item)">Order</v-btn>

                        </v-card>
                        </v-col>
                        </v-row>
                        </v-container>
                        </v-card>
                        </v-container>
                        
                        <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
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
        image: "https://image.shutterstock.com/image-photo/homemade-french-fries-ketchup-roasted-260nw-2489017835.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "https://img.freepik.com/premium-photo/high-angle-view-sausages-basket_1048944-22364747.jpg?ga=GA1.1.1044935582.1740119784&semt=ais_hybrid"
    },
    {   
        name: "Burger",
        price: 100, 
        description: "Best burgers in town",
        size: "Large",   
        offers: "None",
        image: "https://image.shutterstock.com/image-photo/beef-burger-stacked-cheese-bacon-260nw-2502135717.jpg"

    },
    {
        name: "Pizza",
        price: 300,
        description: "Best pizza in town",
        size: "Large",
        offers: "None",
        image: "https://image.shutterstock.com/image-photo/fresh-homemade-italian-pizza-margherita-260nw-1829205563.jpg"
    },
    {
        name: "Pasta",
        price: 200, 
        description: "Best pasta in town",
        size: "Large",
        offers: "None",
        image: "https://image.shutterstock.com/image-photo/dinner-plate-spaghetti-vegan-bolognese-260nw-2493019461.jpg"
    },
    {
        name: "Chicken",
        price: 150,
        description: "Best chicken in town",
        size: "Large",
        offers: "None",
        image: "https://img.freepik.com/free-photo/grilled-chicken-with-fried-potatoes_181624-1168.jpg?ga=GA1.1.1044935582.1740119784&semt=ais_hybrid"
    },
    {
        name: "Fish",
        price: 200,
        description: "Best fish in town",
        size: "Large",
        offers: "None",
        image: "https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26407.jpg?ga=GA1.1.1044935582.1740119784&semt=ais_hybrid"
    }

]
var orderItems = []
var totalOrderAmount = 0

function calculaTotalAmount(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)
    
}

</script>