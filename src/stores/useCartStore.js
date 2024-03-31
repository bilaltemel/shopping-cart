import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Iphone 14",
        price: 1000,
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-8E4bAd6IHGQMqDphorRTBkzqJamzvOo40XErPJzKZqSWRjfYu928RbR82VDB5K28tDqKl6v-Cduf_PZyr5Ecf7B18jpQTB_vyW7bb0g6gdJJZfRE961D9WQ",
      },
      {
        id: 2,
        name: "Samsung s20",
        price: 5000,
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWKYFAYtxI6VCWLzB8nDqmeQWr1Xt2XN-JIZtFErIkuSegMZOaL0ri9gvwLrZj1vyC37TN1DZY_mMKRafASv6g89bTAKxsuyv3bf4WPcxb394yL8ohRyVAwQ",
      },
      {
        id: 3,
        name: "TV LG",
        price: 10000,
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjp8fPaZoeSscwA5ojT8x1YvRtXc7hV3hKS78uqLiiEGdvXntTPoK0pwgWwPk0bDTzGfHa_7ysquWgqADXsz5xLe0hlFRuEXILpBdT6uQI0WBOX-uiSMak",
      },
      {
        id: 4,
        name: "Oppo 14",
        price: 400,
        image:
          "https://cdn.easycep.com/assets/_web/img/product/2022/09/l_oppo-a74-5031-1-1663079614.webp",
      },
    ],
    cartItems: [],
  }),
  getters: {
    countCartItems(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    addToCart(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Ürün başarıyla güncellendi!", {
          timeout: 2000,
        });
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        toast.success("Ürün sepete eklendi!", {
          timeout: 2000,
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        toast.success("Ürün güncellendi!", {
          timeout: 2000,
        });
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
        toast.success("Ürün güncellendi!", {
          timeout: 2000,
        });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.id === item.id
      );
      toast.success("Ürün silindi!", {
        timeout: 2000,
      });
    },
  },
});
