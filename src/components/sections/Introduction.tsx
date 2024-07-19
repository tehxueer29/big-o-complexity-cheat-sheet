import Section from "../Section";
import Card from "../Card";

export default function Introduction() {
  return (
    <>
      <Section title="Introduction" firstSection={true} mainSection={true}>
        <div className="space-y-6">
          <Card>
            <div className="space-y-2.5 px-9 py-6">
              <p className="text-xl font-bold">
                Welcome to your go-to resource for algorithm efficiency!
              </p>
              <p>
                The Big O Complexity Cheat Sheet simplifies the complexities of
                algorithm analysis, offering clear and concise information on
                the performance of different data structures and algorithms.
                Whether you're preparing for a coding interview or aiming to
                optimize your code, this cheat sheet will be an invaluable tool
                in your programming toolkit.
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-x-3 p-3">
              <img src="src\assets\credits.jpg" alt="" className="w-20" />
              <p className="font-bold">
                Full credits to{" "}
                <a
                  href="https://www.bigocheatsheet.com/"
                  target="_blank"
                  className="text-primary-500 hover:text-primary-700 underline underline-offset-2 transition"
                >
                  BigOCheatSheet.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
