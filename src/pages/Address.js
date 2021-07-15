export const Address = () => {
  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Address</h3>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="AddressId">Address Id</label>
            <input
              type="text"
              class="form-control"
              id="AddressId"
              placeholder="AddressId"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="Flat or HouseNumber">Flat or HouseNumber</label>
            <input
              type="text"
              class="form-control"
              id="Flat or HouseNumber"
              placeholder="Flat/HouseNumber"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="BuildingName">BuildingName</label>
            <input
              type="text"
              class="form-control"
              id="BuildingName"
              placeholder="Building Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="LandMark">LandMark</label>
            <input
              type="text"
              class="form-control"
              id="LandMark"
              placeholder="LandMark"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputVillage">Village</label>
            <input
              type="text"
              class="form-control"
              id="inputVillage"
              placeholder="Enter Village"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputTaluk">Taluk</label>
            <input
              type="text"
              class="form-control"
              id="inputTaluk"
              placeholder="Enter Taluk"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputDistrict">District</label>
            <input
              type="text"
              class="form-control"
              id="inputDistrict"
              placeholder="Enter District"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <input
              type="text"
              class="form-control"
              id="inputState"
              placeholder="Enter State"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputPincode">Pincode</label>
            <input
              type="text"
              class="form-control"
              id="inputPincode"
              placeholder="Enter Pincode"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          add address
        </button>
      </form>
    </div>
  );
};
