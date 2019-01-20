import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      selectedDog: "",
      dogs: {
        affenpinscher: [],
        african: [],
        airedale: [],
        akita: [],
        appenzeller: [],
        basenji: [],
        beagle: [],
        bluetick: [],
        borzoi: [],
        bouvier: [],
        boxer: [],
        brabancon: [],
        briard: [],
        bulldog: ["boston", "french"],
        bullterrier: ["staffordshire"],
        cairn: [],
        cattledog: ["australian"],
        chihuahua: [],
        chow: [],
        clumber: [],
        cockapoo: [],
        collie: ["border"],
        coonhound: [],
        corgi: ["cardigan"],
        cotondetulear: [],
        dachshund: [],
        dalmatian: [],
        dane: ["great"],
        deerhound: ["scottish"],
        dhole: [],
        dingo: [],
        doberman: [],
        elkhound: ["norwegian"],
        entlebucher: [],
        eskimo: [],
        frise: ["bichon"],
        germanshepherd: [],
        greyhound: ["italian"],
        groenendael: [],
        hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
        husky: [],
        keeshond: [],
        kelpie: [],
        komondor: [],
        kuvasz: [],
        labrador: [],
        leonberg: [],
        lhasa: [],
        malamute: [],
        malinois: [],
        maltese: [],
        mastiff: ["bull", "english", "tibetan"],
        mexicanhairless: [],
        mix: [],
        mountain: ["bernese", "swiss"],
        newfoundland: [],
        otterhound: [],
        papillon: [],
        pekinese: [],
        pembroke: [],
        pinscher: ["miniature"],
        pointer: ["german", "germanlonghair"],
        pomeranian: [],
        poodle: ["miniature", "standard", "toy"],
        pug: [],
        puggle: [],
        pyrenees: [],
        redbone: [],
        retriever: ["chesapeake", "curly", "flatcoated", "golden"],
        ridgeback: ["rhodesian"],
        rottweiler: [],
        saluki: [],
        samoyed: [],
        schipperke: [],
        schnauzer: ["giant", "miniature"],
        setter: ["english", "gordon", "irish"],
        sheepdog: ["english", "shetland"],
        shiba: [],
        shihtzu: [],
        spaniel: [
          "blenheim",
          "brittany",
          "cocker",
          "irish",
          "japanese",
          "sussex",
          "welsh"
        ],
        springer: ["english"],
        stbernard: [],
        terrier: [
          "american",
          "australian",
          "bedlington",
          "border",
          "dandie",
          "fox",
          "irish",
          "kerryblue",
          "lakeland",
          "norfolk",
          "norwich",
          "patterdale",
          "russell",
          "scottish",
          "sealyham",
          "silky",
          "tibetan",
          "toy",
          "westhighland",
          "wheaten",
          "yorkshire"
        ],
        vizsla: [],
        weimaraner: [],
        whippet: [],
        wolfhound: ["irish"]
      }
    };
  }

  componentDidMount() {}
  onChange = event => {
    const selected = event.target.value;
    fetch(`https://dog.ceo/api/breed/${selected}/images`)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => {
          const withFetcheDogs = {
            ...prevState.dogs,
            [selected]: data.message
          };
          return { dogs: withFetcheDogs, selectedDog: selected };
        })
      )
      .then(() => {
        console.log(this.state);
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <select onChange={this.onChange} value="" defaultValue="Choose here">
          <option selected>select your favorite dog</option>
          {Object.keys(this.state.dogs).map(key => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
        </select>
        {this.state.selectedDog !== "" &&
          this.state.dogs[this.state.selectedDog].map((item, index) => {
            return <img key={index} src={item} />;
          })}
        <img src={this.state.dog} alt="" />
      </div>
    );
  }
}

export default HomePage;
