import "./App.css";
import "./global.css";
import Card from "./components/card";
import Testimonials from "./components/testimonials";
function App() {
  const testimonials = [
    {
      name: "Alice",
      content:
        "Found my joy in every video swipe! [App Name] makes dating an absolute delight. 🌟",
    },
    {
      name: "Bob",
      content:
        "Video magic! It's not just about profiles; it's about personalities. Thanks, [App Name], for bringing laughter into my love life! 😄💖",
    },
    {
      name: "Charlie",
      content:
        "Swipe less, smile more! [App Name] turns dating into a happy video journey. Best decision ever! 🎥❤️",
    },
    {
      name: "David",
      content:
        "Love at first video! [App Name] adds a whole new dimension to dating. So grateful for this fun and fabulous app! 🚀💑",
    },
    {
      name: "Eva",
      content:
        "Laughed, loved, and swiped right into happiness! [App Name] is the matchmaker I never knew I needed. Cheers to joyous connections! 🥂💕",
    },
  ];
  return (
    <div className="body">
      <h1 className="title">Welcome To ClipCrush</h1>
      <div className="row">
        <Card title={"Meet [App Name]!"}>
          <p>
            Introducing [App Name], where connections transcend words! 🚀
            Created by the dynamic trio of Robi, the mastermind backend
            engineer, Dominik, the wizard frontend engineer, and Ádám, the
            visionary designer, this revolutionary dating app is set to redefine
            the way you find meaningful connections.
          </p>
        </Card>
        <Card title={"Care to elaborate"}>
          <p>
            Forget the limitations of a mere 500 characters to express who you
            are. With [App Name], immerse yourself in a world of authentic
            connections through user-generated videos. 🎥 Scroll through
            captivating clips made by genuine individuals, sharing their
            stories, passions, and personalities in a way words alone could
            never capture.
          </p>
        </Card>
        <Card title={"About our Crew"}>
          <p>
            Crafted with love and expertise, [App Name] seamlessly combines
            cutting-edge technology with innovative design. Robi, Dominik, and
            Ádám have poured their hearts into creating an app that transcends
            the ordinary, providing a platform where personalities shine
            brighter than ever before.
          </p>
        </Card>
        <Card title={"Video Sparks Love"}>
          <p>
            Why settle for swipes when you can make a genuine connection through
            meaningful videos? Download [App Name] now and embark on a journey
            where sparks fly, laughter resonates, and love unfolds in the most
            authentic way.
          </p>
        </Card>
      </div>
      <div className="row">
        <h1>
          Don't miss out on the chance to experience dating in a revolutionary
          new light. Join [App Name] today and let the videos do the talking! 💖
        </h1>
      </div>
      <div className="row">
        <img
          className="img-wrap"
          src="https://placehold.co/150x300/000000/FFFFFF/png"
          alt=""
        />
        <img
          className="img-wrap"
          src="https://placehold.co/150x300/000000/FFFFFF/png"
          alt=""
        />
        <img
          className="img-wrap"
          src="https://placehold.co/150x300/000000/FFFFFF/png"
          alt=""
        />
      </div>
      <div className="col">
        <div className="row">
          <Card title={"Exciting Features Await You"}>
            <p>
              [App Name] is packed with exciting features designed to enhance
              your dating experience. From personalized recommendations to
              interactive challenges, discover a world of possibilities. Stay
              tuned for updates as we continue to innovate and bring you new
              ways to connect and find your special someone!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
