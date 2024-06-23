const ToneRow = () => {
  return (
    <>
      <label htmlFor="keywords">What&apos;s the tone of the post?</label>
      <div className="keywords_select column">
        <div className=" social_media row">
          <div className="row_2">
            <input
              type="checkbox"
              id="business"
              name="business"
              value="business"
            />
            Professional
            <input type="checkbox" id="casual" name="casual" value="casual" />
            Casual
            <input type="checkbox" id="fun" name="fun" value="fun" />
            Fun
          </div>
          <div className="row_2">
            <input
              type="checkbox"
              id="serious"
              name="serious"
              value="serious"
            />
            Serious
            <input
              type="checkbox"
              id="reflective"
              name="reflective"
              value="reflective"
            />
            Reflective
            <input
              type="checkbox"
              id="excited"
              name="excited"
              value="excited"
            />
            Excited
          </div>
        </div>

        <input type="text" id="select_custom" placeholder="Enter Your Own!" />
        <p>Separate Keywords by Commas!</p>
      </div>
    </>
  );
};

export default ToneRow;
