<template>
  <div class="row my-4">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Resim</th>
                <th>Ürün Adı</th>
                <th>Adet</th>
                <th>Fiyat</th>
                <th>Toplam</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data.cartItems" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <img
                    :src="item.image"
                    width="60"
                    height="60"
                    class="img-fluid rounded"
                    alt=""
                  />
                </td>
                <td>{{ item.name }}</td>
                <td>
                  <i class="bi bi-caret-up" @click="data.incrementQ(item)"></i>
                  {{ item.quantity }}
                  <i
                    class="bi bi-caret-down"
                    @click="data.decrementQ(item)"
                  ></i>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.price * item.quantity }}</td>
                <td>
                  <i @click="data.removeFromCart(item)" class="bi bi-cart-x text-danger fw-bo"></i>
                </td>
              </tr>
              <tr>
                <th class="text-center" colspan="3">Toplam</th>
                <td class="text-center" colspan="3">
                  <span class="badge badge bg-danger tounded-pill">{{
                    data.cartItems.reduce(
                      (acc, item) => (acc += item.price * item.quantity),
                      0
                    )
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";

const data = useCartStore();
</script>

<style>
i {
  cursor: pointer;
}
</style>
