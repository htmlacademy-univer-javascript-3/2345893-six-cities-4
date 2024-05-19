import { sortOffersByPrice } from "./sortOffersByPrice";
import { OffersType } from "../types/OffersType.ts";
import { address, helpers, image, lorem, random } from "faker";

const mock = new Array(3).fill(null).map((_o, i) => ({
    id: helpers.slugify(),
    title: lorem.sentence(),
    type: lorem.word(),
    price: i,
    city: {
      name: address.cityName(),
      location: {
        latitude: address.latitude(),
        longitude: address.longitude(),
        zoom: 13,
      },
    },
    location: {
      latitude: address.latitude(),
      longitude: address.longitude(),
      zoom: 13,
    },
    isFavorite: random.boolean(),
    isPremium: random.boolean(),
    rating: random.number({ min: 0, max: 5 }),
    previewImage: image.imageUrl()
  })
) as unknown as OffersType;

describe('Testing "groupBy"', () => {
  it('should return empty array', () => {
    const result = sortOffersByPrice([])

    expect(result).toEqual([]);
  });

  it('should return mock offers descending', () => {
    const result = sortOffersByPrice(mock)

    expect(result).toEqual([mock[2], mock[1], mock[0]]);
  });

  it('should return mock offers ascending', () => {
    const result = sortOffersByPrice(mock, true)

    expect(result).toEqual([mock[0], mock[1], mock[2]]);
  });
})

