const quotes = [
    {
        quote: "힘들 땐 어떻게 이겨내나요? 가끔 져요.",
        author: "IU",
    },
    {
        quote: "하나를 잃으면 하나를 얻고, 하나를 얻으면 하나를 잃는다는 말을 되새김질하며 살고있어요.",
        author: "IU",
    },
    {
        quote: "불안하면서 근사하게 사느니, 그냥 초라하더라도 마음 편하게 살아야지라는 생각을 했어요.",
        author: "IU",
    },
    {
        quote: "지금까지 늘 예외없이 그래왔고, 앞으로도 적당히 포기해가며 가치있는 행복을 누리고 싶어요.",
        author: "IU",
    },
    {
        quote: "사랑이란 단 두글자로 완성된 한편의 시",
        author: "IU",
    },
    {
        quote: "'못해요, 못해요'를 입에 달고 살다가 그걸 고쳐보려고 이 생각 저 생각 해봤더니, 결국 '잘 모르니까 한번 해볼게요'를 이유 삼아 저 자신을 바꿀수 밖에 없겠더라고요.",
        author: "IU",
    },
    {
        quote: "저를 싫어하는 사람까지 절 좋아하게 만들 만큼 전 대인배가 아니거든요. 절 싫어하는 사람은 저도 안 좋아하면 그만이니까.",
        author: "IU",
    },
    {
        quote: "원하는 것들을 이루기 위해서는 무언가를 포기해야 한다고 들었습니다, 포기하신 건 뭔가요? 아까워하는 마음입니다.",
        author: "IU",
    },
    {
        quote: "오늘 이 순간을 예쁜 그림으로 만들어 나는 또 꿈을 그릴 겁니다.",
        author: "IU",
    },
    {
        quote: "제가 좋아하고 사랑하는 사람들한테 갚으면서 살꺼예요. 여러분들한테.",
        author: "IU",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;