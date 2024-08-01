import Questions from "../components/home/Questions";
import { QUESTIONS } from "../constant";

function Home() {
    return (
        <div className="container mx-auto flex flex-col items-center">
            <Questions questions={QUESTIONS} />
        </div>
    );
}

export default Home;