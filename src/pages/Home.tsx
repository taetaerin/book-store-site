import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

const COUNT = 10000
export default function Home() {
    return (
        <>
            <Header />
            <div>book store</div>
            <div>count: {formatNumber(COUNT)}</div>
        </>
    );
}
