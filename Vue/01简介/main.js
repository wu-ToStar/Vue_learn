const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.0,
        count: 1,
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.0,
        count: 1,
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.0,
        count: 1,
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.0,
        count: 1,
      },
    ],
  },
    computed: {
        totalPrice() {
            let total = 0;
            for (const book of this.books) {
                total = total + book.price * book.count;
            }
            return total;
      }
  },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        remove(index) {
            console.log(index)
            this.books.splice(index,1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' +price.toFixed(2)
        }
    }
});
