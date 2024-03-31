<template>
  <div class="col-md-2 mb-2">
    <div class="card">
        <img :src="product.image" class="card-img-top" width="300" style="margin-top:10px" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet.</p>
            <p>
                <span class="badge bg-danger">
                    {{ product.price }}₺
                </span>
            </p>
            <button @click="data.addToCart(product)" class="btn btn-primary">
                <i class="bi bi-cart-check"></i>
                Sepete Ekle
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/useCartStore';

const data = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style>

</style>