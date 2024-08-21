import { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
function Home() {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const setEndDateToTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setDate({
      ...date,
      endDate: tomorrow,
    });
  };
  useEffect(() => {
    setEndDateToTomorrow();
  }, []);
  // Gọi hàm này để cập nhật endDate thành ngày mai

  return (
    <>
      <div>
        <section className=" bg-black ">
          <div
            className="h-100  banner row d-flex justify-content-center"
            style={{
              backgroundImage: "url(images/hero_2.jpg)",
              backgroundPosition: "center center",
            }}
          >
            <div className="col-4 mt-5">
              <h1 className=" mb-3 text-white d-inline-block f-robo heading1 title">
                The perfect home base for your special trip
              </h1>
              <p className="text-white heading2 ">
                Discover dreamy holiday homes all over the world
              </p>
            </div>
          </div>
        </section>
        <section className="section mt-5 pb-0">
          <div className="container">
            <div className="row check-availabilty" id="next">
              <div className="block-32 mt-3 ">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6  col-lg-3 p-0 pl-3">
                      <div className="uk-inline w-100 search-input">
                        <i className="fa-solid fa-location-dot uk-form-icon" />
                        <input
                          className="uk-input fw500"
                          type="text"
                          aria-label="Not clickable icon"
                          placeholder="location"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 p-0 pl-2">
                      <div className="uk-inline w-100">
                        <button
                          className="uk-button uk-button-default w-100 fw500 text-muted"
                          type="button"
                        >
                          {`${format(date.startDate, "MMM,dd")} - ${format(
                            date.endDate,
                            "MMM,dd"
                          )}`}
                          <i className="fa-regular fa-calendar ml-2"></i>
                        </button>
                        <div
                          className="shadow1 border border-warning"
                          uk-dropdown="mode: click;pos: bottom-center;shift: false; flip: false"
                        >
                          <DateRangePicker
                            ranges={[date]}
                            onChange={(event) => {
                              setDate(event.selection);
                            }}
                            minDate={new Date()}
                          />
                        </div>
                      </div>

                      {/* <div className="uk-inline w-100">
                        <button
                          className="uk-button uk-button-default w-100 text-capitalize text-right fw500 text-muted"
                          type="button"
                        >
                          {`${format(date.startDate,'MMM,dd')} - ${format(date.endDate,'MMM,dd')}`}<i className="fa-regular fa-calendar ml-2"></i>
                        </button>
                        <div
                          className="uk-card uk-card-body uk-card-default"
                          uk-drop="pos: bottom-center"
                        >
                            <DateRangePicker
                            ranges={[date]}
                            onChange={(event) => {setDate(event.selection)}}
                            minDate={new Date()}
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-6 col-lg-3 p-0 pl-2">
                      <select
                        className="uk-select w-100 search-input"
                        aria-label="Select"
                      >
                        <option>Option 01</option>
                        <option>Option 02</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-lg-3 align-self-end ">
                      <button className="btn btn-primary btn-block text-white search-input">
                        Check Availabilty
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* trending locaion */}
        <section className="section pb-0 pt-2">
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <h2 className=" f-robo heading1 mb-0" data-aos="fade-up">
                  Trending location
                </h2>
                <p className="f-robo mt-0">
                  Travelers searching for Poland also booked these
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 mb-3" data-aos="fade-up">
                <div>
                  <div className="uk-inline uk-inline-clip uk-transition-toggle o-hidden cs-rounded">
                    <img
                      src="images/img_1.jpg"
                      className="uk-transition-scale-up uk-transition-opaque cursor-pointer"
                      width={1800}
                      height={1200}
                    />
                    <div className=" uk-position-top  pl-3">
                      <h3 className="text-white f-robo title">
                        Krakow{" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEX///8AAAAAAAAAAAAAAAD////4+PjcNjziMTfZMznYLjXWKjDgJy7gISjTISffGCDPGSC/1p0sAAAABXRSTlMAESIzRJTdRHwAAABUSURBVBgZrcFBEsIwDATBmbX4/4MJNvdEOlBFN/yNSOdo0bkiLcMgDMIgSEPCIAwK8+LufQihEQpXuKtNkIaERWMRkAehyGfTKFh0NPJ0tkjn8LMvIC8KSZddA7kAAAAASUVORK5CYII="
                          loading="lazy"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-3" data-aos="fade-up">
                <div>
                  <div className="uk-inline uk-inline-clip uk-transition-toggle o-hidden cs-rounded">
                    <img
                      src="images/img_2.jpg"
                      className="uk-transition-scale-up uk-transition-opaque cursor-pointer"
                      width={1800}
                      height={1200}
                    />
                    <div className=" uk-position-top  pl-3">
                      <h3 className="text-white f-robo title">
                        United Stated{" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEX///8AAAAAAAAAAAAAAAD////4+PjcNjziMTfZMznYLjXWKjDgJy7gISjTISffGCDPGSC/1p0sAAAABXRSTlMAESIzRJTdRHwAAABUSURBVBgZrcFBEsIwDATBmbX4/4MJNvdEOlBFN/yNSOdo0bkiLcMgDMIgSEPCIAwK8+LufQihEQpXuKtNkIaERWMRkAehyGfTKFh0NPJ0tkjn8LMvIC8KSZddA7kAAAAASUVORK5CYII="
                          loading="lazy"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4" data-aos="fade-up">
                <div>
                  <div className="uk-inline uk-inline-clip uk-transition-toggle o-hidden cs-rounded">
                    <img
                      src="images/img_3.jpg"
                      className="uk-transition-scale-up uk-transition-opaque cursor-pointer"
                      width={1800}
                      height={1200}
                    />
                    <div className=" uk-position-top  pl-3">
                      <h3 className="text-white f-robo title">
                        Singapore{" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEX///8AAAAAAAAAAAAAAAD////4+PjcNjziMTfZMznYLjXWKjDgJy7gISjTISffGCDPGSC/1p0sAAAABXRSTlMAESIzRJTdRHwAAABUSURBVBgZrcFBEsIwDATBmbX4/4MJNvdEOlBFN/yNSOdo0bkiLcMgDMIgSEPCIAwK8+LufQihEQpXuKtNkIaERWMRkAehyGfTKFh0NPJ0tkjn8LMvIC8KSZddA7kAAAAASUVORK5CYII="
                          loading="lazy"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4" data-aos="fade-up">
                <div>
                  <div className="uk-inline uk-inline-clip uk-transition-toggle o-hidden cs-rounded">
                    <img
                      src="images/img_4.jpg"
                      className="uk-transition-scale-up uk-transition-opaque cursor-pointer"
                      width={1800}
                      height={1200}
                    />
                    <div className=" uk-position-top  pl-3">
                      <h3 className="text-white f-robo title">
                        Prague{" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEX///8AAAAAAAAAAAAAAAD////4+PjcNjziMTfZMznYLjXWKjDgJy7gISjTISffGCDPGSC/1p0sAAAABXRSTlMAESIzRJTdRHwAAABUSURBVBgZrcFBEsIwDATBmbX4/4MJNvdEOlBFN/yNSOdo0bkiLcMgDMIgSEPCIAwK8+LufQihEQpXuKtNkIaERWMRkAehyGfTKFh0NPJ0tkjn8LMvIC8KSZddA7kAAAAASUVORK5CYII="
                          loading="lazy"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4" data-aos="fade-up">
                <div>
                  <div className="uk-inline uk-inline-clip uk-transition-toggle o-hidden cs-rounded">
                    <img
                      src="images/img_5.jpg"
                      className="uk-transition-scale-up uk-transition-opaque cursor-pointer"
                      width={1800}
                      height={1200}
                    />
                    <div className=" uk-position-top  pl-3">
                      <h3 className="text-white f-robo title">
                        Zakopane{" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEX///8AAAAAAAAAAAAAAAD////4+PjcNjziMTfZMznYLjXWKjDgJy7gISjTISffGCDPGSC/1p0sAAAABXRSTlMAESIzRJTdRHwAAABUSURBVBgZrcFBEsIwDATBmbX4/4MJNvdEOlBFN/yNSOdo0bkiLcMgDMIgSEPCIAwK8+LufQihEQpXuKtNkIaERWMRkAehyGfTKFh0NPJ0tkjn8LMvIC8KSZddA7kAAAAASUVORK5CYII="
                          loading="lazy"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* perfect stay */}
        <section className="section py-1">
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <h3 className=" f-robo heading1 mb-0" data-aos="fade-up">
                  Explore Poland
                </h3>
                <p className="heading2 my-1">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabIndex={-1}
              uk-slider=""
            >
              <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m p-1">
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China A</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China B</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China C</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card ">
                    <div className="uk-card-media-top uk-inline uk-inline-clip uk-transition-toggle cs-rounded o-hidden cursor-pointer">
                      <img
                        src="images/hero_2.jpg"
                        className="uk-transition-scale-up uk-transition-opaque"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h4 className="f-robo fw700 mb-1 text-dark">China D</h4>
                      <p className="mt-1 text-dark">1,3400 properties</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="uk-position-center-left uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-previous=""
                uk-slider-item="previous"
              />
              <a
                className="uk-position-center-right uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-next=""
                uk-slider-item="next"
              />
            </div>
          </div>
        </section>
        {/* looking for */}
        <section className="section py-4">
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <h3 className=" f-robo heading1 mb-0" data-aos="fade-up">
                  Looking for the perfect stay?
                </h3>
                <p className="heading2 my-1">
                  Travelers with similar searches booked these properties
                </p>
              </div>
            </div>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabIndex={-1}
              uk-slider=""
            >
              <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m p-1">
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel A
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_3.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel B
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/food-1.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel C
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel D
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/banner1.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel E
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel F
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="uk-position-center-left uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-previous=""
                uk-slider-item="previous"
              />
              <a
                className="uk-position-center-right uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-next=""
                uk-slider-item="next"
              />
            </div>
          </div>
        </section>
        {/* guest love */}
        <section className="section py-2">
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <h3 className=" f-robo heading1 mb-0" data-aos="fade-up">
                  Homes guests love
                </h3>
              </div>
            </div>
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabIndex={-1}
              uk-slider=""
            >
              <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m p-1">
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel A
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel B
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel C
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel D
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel E
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="uk-card uk-card-default cs-rounded o-hidden cursor-pointer">
                    <div className="uk-card-media-top">
                      <img
                        src="images/hero_4.jpg"
                        className="img1"
                        width={1800}
                        height={1200}
                      />
                    </div>
                    <div className="uk-card-body p-2">
                      <h3 className="uk-card-title f-robo fw700 mb-0">
                        Hotel F
                      </h3>
                      <p className="my-0 fs-small">Ho Chi Minh,Viet Nam </p>
                      <p className="mt-0 mb-5 fs-small">
                        <span className="rv-badge">8,3</span>
                        <span className="fw500">
                          {" "}
                          Excellent&nbsp; - &nbsp;2943 reviews
                        </span>
                      </p>
                      <p className=" my-0 uk-text-right@l">
                        <span className="fs-small">Starting form</span>{" "}
                        <span className="fw700">1,500,000 VNĐ</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="uk-position-center-left uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-previous=""
                uk-slider-item="previous"
              />
              <a
                className="uk-position-center-right uk-position-small text-dark bg-white rounded-circle"
                uk-slidenav-next=""
                uk-slider-item="next"
              />
            </div>
          </div>
        </section>
        <section
          className="section bg-image overlay"
          style={{ backgroundImage: 'url("images/hero_4.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left"
                data-aos="fade-up"
              >
                <h2 className="text-white font-weight-bold">
                  A Best Place To Stay. Reserve Now!
                </h2>
              </div>
              <div
                className="col-12 col-md-6 text-center text-md-right"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <a
                  href="reservation.html"
                  className="btn btn-outline-white-primary py-3 text-white px-5"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
