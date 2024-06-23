const AvatarRow = () => {
  return (
    <>
      <div className="column social_media">
        <label htmlFor="target_audience">Choose your Target Audience</label>
        <br></br>
        <div className="row_1">
          <input type="checkbox" id="general" name="general" value="general" />
          General
          <input
            type="checkbox"
            id="young_adults"
            name="young_adults"
            value="young_adults"
          />
          Young Adults
          <input type="checkbox" id="seniors" name="seniors" value="seniors" />
          Seniors
        </div>
      </div>
    </>
  );
};

export default AvatarRow;
