function UserInputFrom() {
  return (
    <form>
      <div class="container border border-primary border-1">
        <div class="row my-4 d-flex justify-content-center">
          <div class="col-xl-3">
            <input
              type="text"
              class="form-control"
              placeholder="reason"
              aria-label="reason"
            />
          </div>
          <div class="col-xl-3">
            <input
              type="number"
              class="form-control"
              placeholder="Amount"
              aria-label="Amount"
              min="0.01"
              step="0.01"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-xl-3">
            <input
              type="date"
              class="form-control"
              placeholder="Date"
              aria-label="Date"
              min="2001-01-01"
              max="2024-01-01"
            />
          </div>
          <div class="col-xl-3">
            <button type="submit">Add expence</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInputFrom;
