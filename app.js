const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        // thay đổi slide hiện tại
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        // thay đổi sản phẩm được chọn
        choosenProduct = products[index];

        //thay đổi nội dung của sản phẩm hiện tại
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // thay đổi màu mặc định thành màu tương ứng trong mảng products
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

//click vào mã màu sẽ thay đổi hình ảnh
currentProductColors.forEach((color, index) => {
    color.addEventListener('click', ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', ()=>{
        // gán tất cả size nền trắng - chữ đen trước
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "#fff"
            size.style.color = "#000"
        })
        // Sự kiện được click, gán lại nền đen chữ trắng
        size.style.backgroundColor = "#000"
        size.style.color = "#fff"
    })
})

// Payment Modal
const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")
// const container = document.querySelector(".container")

productButton.addEventListener("click", () =>{
    payment.style.display = "flex";
    // container.style.display = "block"
})

close.addEventListener("click", () =>{
    payment.style.display = "none";
})