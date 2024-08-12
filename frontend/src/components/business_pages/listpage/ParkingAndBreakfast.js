import { useState, useEffect, useRef } from "react";
function currencyFormat(num) {
  // Convert number to a string and format with commas for thousands
  return num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function ParkingAndBreakfast({ value, setValue }) {
  const [isParkingAvailable, setIsParkingAvailable] = useState(
    value.parkingDetail ? true : false
  );
  const [isBreakfastServed, setIsBreakfastServed] = useState(
    value.breakfastDetail ? true : false
  );

  useEffect(() => {
    // Update the property state when checkboxes are toggled
    setValue((prev) => ({
      ...prev,
      parkingDetail: isParkingAvailable
        ? prev.parkingDetail || { price: 0 }
        : null,
      breakfastDetail: isBreakfastServed
        ? prev.breakfastDetail || { price: 0, type: null }
        : null,
    }));
  }, [isParkingAvailable, isBreakfastServed, setValue]);

  const handleParkingPriceChange = (e) => {
    if (isParkingAvailable) {
      setValue((prev) => ({
        ...prev,
        parkingDetail: {
          price: e.target.value,
        },
      }));
    }
  };

  const handleBreakfastPriceChange = (e) => {
    if (isBreakfastServed) {
      setValue((prev) => ({
        ...prev,
        breakfastDetail: {
          ...prev.breakfastDetail,
          price: e.target.value,
        },
      }));
    }
  };

  return (
    <>
      <h2 className="f-robo fw700">Parking and breakfast</h2>
      <div className="row bg-white p-1 pt-2 cs-rounded">
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="parkingAvailable"
              checked={isParkingAvailable}
              onChange={() => setIsParkingAvailable((prev) => !prev)}
            />
            <label className="form-check-label" htmlFor="parkingAvailable">
              Is parking available?
            </label>
          </div>
        </div>

        {isParkingAvailable && (
          <>
            <div className="col-12 my-2">
              <p className="fs-small">
                Provide parking details and pricing to ensure your guests are
                informed about available options. Make sure to enter the price
                in Vietnamese Dong (VNĐ).
              </p>
            </div>
            <div className="col-8">
              <div className="input-group">
                <label htmlFor="parkingPrice" className="my-auto">
                  Parking Price :&nbsp;
                </label>
                <input
                  type="number"
                  name="price"
                  id="parkingPrice"
                  className="form-control"
                  value={value.parkingDetail?.price || 0}
                  onChange={handleParkingPriceChange}
                  min="0"
                />
                <span className="input-group-text bg-blue text-white">VNĐ</span>
              </div>
              <div className="mt-2">
                <strong>Price per night : &nbsp;</strong>
                {value.parkingDetail?.price && (
                  <span>
                    {currencyFormat(Number(value.parkingDetail.price))}
                  </span>
                )}
              </div>
            </div>
          </>
        )}

        <div className="col-12 mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="breakfastServed"
              checked={isBreakfastServed}
              onChange={() => setIsBreakfastServed((prev) => !prev)}
            />
            <label className="form-check-label" htmlFor="breakfastServed">
              Is breakfast served?
            </label>
          </div>
        </div>
        {isBreakfastServed && (
          <>
            <div className="col-12 my-2">
              <p className="fs-small">
                If breakfast is served, please provide the details of the
                pricing below. This helps to ensure that your guests are aware
                of any additional costs associated with breakfast during their
                stay. Make sure to enter the price in Vietnamese Dong (VNĐ).
              </p>
            </div>
            <div className="col-8">
              <div className="input-group">
                <label htmlFor="parkingPrice" className="my-auto">
                  Breakfast Price :&nbsp;
                </label>
                <input
                  type="number"
                  name="price"
                  id="parkingPrice"
                  className="form-control"
                  value={value.breakfastDetail?.price || 0}
                  onChange={handleBreakfastPriceChange}
                  min="0"
                />
                <span className="input-group-text bg-blue text-white">VNĐ</span>
              </div>
              <div className="mt-2">
                <strong>Price for each breakfast : &nbsp;</strong>
                {value.breakfastDetail?.price && (
                  <span>
                    {currencyFormat(Number(value.breakfastDetail.price))}
                  </span>
                )}
              </div>
            </div>
            <div className="col-12 my-2">
              <p className="fwbolder text-dark">
                What type of breakfast do you serve?
              </p>
            </div>
            <div className="col-12 my-2">
              <div>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Continental Breakfast
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  English Breakfast
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Asian Breakfasts
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  European Breakfasts
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Middle Eastern Breakfasts
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Latin American Breakfasts
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Healthy/Modern Breakfasts
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Scandinavian Breakfast
                </span>
                <span className="badge badge-pill p-2 border border-dark cursor-pointer mr-2 mb-2">
                  Mexican Breakfast
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default ParkingAndBreakfast;
