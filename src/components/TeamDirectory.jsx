import TeamCard from "./TeamCard";

export default function TeamDirectory() {
  return (
    <div className="container">
      <h1>Team Directory</h1>
      <div className="row">
        <div className="col">
          <TeamCard
            name="Kendall Jefferson"
            role="SWE"
            bio="Hey Im Kendall Jefferson. 
          I will now write some words to take up some space"
          />
        </div>
        <div className="col ">
          <TeamCard
            name="SpongeBob SquarePants"
            role="Clown"
            bio="I'm ready! I'm ready! I'm ready! 
            I'm ready! I'm ready! I'm ready! I'm ready!"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <TeamCard
            name="Bugs Bunny"
            role="Carrot Fanatic"
            bio="Rabbit season isn't real. 
            It's duck season always and anyone that tell's you otherwise doesn't love their family."
          />
        </div>
        <div className="col ">
          <TeamCard
            name="Finn, The Human"
            role="Adventurer"
            bio="Punch-a yo' buns, I can punch all yo' buns! 
            If you're an evil witch, I will punch you for fun!"
          />
        </div>
      </div>
    </div>
  );
}
