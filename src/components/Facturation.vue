<template>
    <div>
        <p class="text-xs">Facturation</p>
        <ul class="font-semibold text-sm">
            <li>
                <span>Nombre de paniers</span>
                <span>{{props.basketNumber}}</span>
            </li>
            <li>
                <span>Total HT dont caution par panier</span>
                <span>{{totalHT}}€</span>
            </li>
            <li>
                <span>TVA</span>
                <span>{{props.tax}}%</span>
            </li>
            <li class="mt-2 text-lg">
                <span>TOTAL TTC</span>
                <span>{{(1 + props.tax/100)*totalHT}}€</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        basketNumber: number;
        basketPrice: number;
        tax: number;
    }>();
    const totalHT = props.basketNumber * props.basketPrice;
</script>

<style>
    li{
        display: flex;
        justify-content: space-between;
    }
    
</style>