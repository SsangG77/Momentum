const quotes = [
    {
        quote: "불안하면서 근사해 보이게 사느니, 그냥 초라하더라도 마음 편하게 살아야지",
        authoer: "IU",
    },{
        quote: "그냥 여러분이 짐작하는 거 보다도 아주 약간 더 제가 여러분을 생각하면서 산다는 거 정도는 알아주셨으면 좋겠습니다.",
        authoer: "IU",
    },{
        quote: "음원으로서의 가치보다, 음악으로서의 가치를 조금 더 생각할 줄 아는 가수가, 작곡가가, 작사가가, 프로듀서가 되겠습니다. 감사합니다.",
        authoer: "IU",
    },{
        quote: "오늘 이 순간을 예쁜 물감으로 만들어 나는 또 꿈을 그릴 겁니다.",
        authoer: "IU",
    }, {
        quote: "절 싫어하는 사람은 저도 안 좋아하면 그만이니까.",
        authoer: "IU",
    }, {
        quote: "하나를 잃으면 하나를 얻고, 하나를 얻으면 하나를 잃는다는 말을 되새김질하며 살고 있어요.",
        authoer: "IU",
    }, {
        quote: "힘들 땐 어떻게 이겨내나요? 가끔 져요.",
        authoer: "IU",
    }, {
        quote: "인생은 때때로 되게 못됐다. 그래서 노력한다.",
        authoer: "IU",
    }, {
        quote: "좋은 사람을 보듯, 대단하고 소중한 사람을 보듯 저를 두시간 세시간 넘게 바라봐 주셔서 정말 정말 감사하고 너무너무 행복했습니다.",
        authoer: "IU",
    }, {
        quote: "여러분이 아이유는 이런 사람인 거 같아요 라고 얘기한 거처럼, 여러분이 저를 안 보고 있을 때도 그렇게 좋은 사람으로 살게요.",
        authoer: "IU",
    }
];

const quote = document.querySelector("#quote span:first-child");
const authoer = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuotes.quote}`;
authoer.innerText = `${todaysQuotes.authoer}`;