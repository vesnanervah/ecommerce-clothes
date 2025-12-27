import promiseDelayed from "../../utils/promise-delayed";
import { Review } from "../types/review";

const mockReviews: Array<Review> = [
    {
        id: 0,
        author: "Annika",
        text: "Jag tycker om det mycket!"
    },
    {
        id: 1,
        author: "Kim",
        text: "Jag kopte det till min flickvän och nu hon är full av gladje."
    },
    {
        id: 2,
        author: "Torvi",
        text: "Vilket finklädd! Som fin som alltid!"
    },
    {
        id: 3,
        author: "Varg Vickernes",
        text: "When night falls, She cloaks the world. In impenetrable darkness. A chill rises from the soil. And contaminates the air. Suddenly Life has new meaning."
    },
        {
        id: 4,
        author: "Pippi Långstrump",
        text: "Var inte ängslig!"
    },
    {
        id: 5,
        author: "Pippi Långstrump",
        text: "Jag klarar mej alltid!"
    },
    {
        id: 6,
        author: "Astrid Lindgren",
        text: "Han hade rätt. Pippi var ett mycket märkvärdigt barn. Det allra märkvärdigaste med henne var att hon var så stark. Hon var så gruvligt stark att i hela världen fanns det ingen polis som var så stark som hon. Hon kunde lyfta en hel häst om hon ville. Och det ville hon. Hon hade en egen häst som hon hade köpt för en av sina många gullpengar samma dag hon kom hem till Villa Villekulla. Hon hade alltid längtat efter en egen häst. Och nu bodde han på verandan. Men när Pippi ville dricka sitt eftermiddagskaffe där lyfte hon utan vidare ut honom i trädgården."
    },
        {
        id: 7,
        author: "Johan",
        text: "Tomma blickar. Tömda sinnen. Tunnelbanan rullar fram genom den svarta stadens dystra passager. Allt har en så melankolisk lyster ikväll. Ingenting och allt i disharmoni. Är det vackert eller avskyvärt?"
    },
    {
        id: 8,
        author: "Lorem ipsum",
        text: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        id: 9,
        author: "de Finibus Bonorum et Malorum",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
];


interface FetchReviewArgs {
    page: number;
}

async function fetchReviews(args: FetchReviewArgs) {
    const slice = mockReviews.slice(args.page, 4)
    return promiseDelayed(slice)
}