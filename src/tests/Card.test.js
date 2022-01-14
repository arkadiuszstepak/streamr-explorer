import React from "react";
import { shallow } from "enzyme";
import Card from "../components/Card";

const product = {
  id: "8b6c9f04c4804cacb60ba1ee480affb987e896a7ac4e4ad087f00107c5f00277",
  type: "DATAUNION",
  name: "Swash",
  description:
    "[Swash](https://swashapp.io/) is the world’s first [Data Union](https://medium.com/swashapp/weve-open-sourced-swash-to-make-data-unions-a-reality-7049e92c364b). It crowdsources users’ surfing data through a browser plugin (available on Chrome, Firefox, Brave, Edge, and more) and shares profits with users. To start earning, users simply install, browse, and receive profits directly into their wallet.\n\nSwash provides data buyers with unrivaled zero-party consumer data at scale, from all over the web, guaranteeing data quality, and user consent. The increasing number of users will grow the value of Swash data assets over time, bringing more value to everyone involved.\n \nFollow Swash:  \n[Twitter](https://twitter.com/swashapp)  \n[Telegram](https://t.me/swashapp_group)  \n[Reddit](https://www.reddit.com/r/Swash_App/)  \n[Medium](https://medium.com/swashapp)",
  imageUrl:
    "https://streamr-public.s3.amazonaws.com/product-images/z_-KXKIWTeiaWvFpiwlRbAs2vdgpQKRy2KHg8daDRulw.png",
  thumbnailUrl:
    "https://streamr-public.s3.amazonaws.com/product-images/QZL6qbxWStGStlHP5y_fHAqhKqDjyPR7OqMHeQ-NRyag.png",
  category: "other",
  state: "DEPLOYED",
  previewStream: null,
  previewConfigJson: null,
  created: "2021-03-17T20:13:57Z",
  updated: "2021-05-24T19:07:27Z",
  ownerAddress: "0x242752acA5c560457a3C49d17d6F7824a595af18",
  beneficiaryAddress: "0x7482ba34EAfbF5C2F62f9c2e7A669cCbD9537FC3",
  pricePerSecond: "5555556",
  isFree: false,
  priceCurrency: "DATA",
  minimumSubscriptionInSeconds: 0,
  owner: "SwashData Tech Oy",
};

describe("Card", () => {
  it("should render Card component with name field", () => {
    const container = shallow(<Card product={product} />);
    expect(container.find("#product-name").text()).toEqual(product["name"]);
  });
});
