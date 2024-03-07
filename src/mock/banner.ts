import { Banner } from "@/models/banner.model";
import { Book } from "@/models/book.model";
import { http, HttpResponse } from "msw";

const bannersData: Banner[] = [
    {
        id: 1,
        title: '자동차의 역사',
        description: '멋진 자동차를 아십니까?',
        image: 'https://picsum.photos/id/111/1200/400',
        url: "http://some.url",
        target: '_brank',
    },
    {
        id: 2,
        title: '하늘을 항상 올려다봐라',
        description: '우울하면 하늘을 봐보세요. 얼마나 좋습니까?',
        image: 'https://picsum.photos/id/222/1200/400',
        url: "http://some.url",
        target: '_self',
    },
    {
        id: 3,
        title: '수평선 넘어로',
        description: '항상 즐거운 마음을 가지자',
        image: 'https://picsum.photos/id/213/1200/400',
        url: "http://some.url",
        target: '_blank',
    }

]
export const banners = http.get("http://localhost:8000/banners", () => {
    return HttpResponse.json(bannersData, {
        status: 200,
    });
});