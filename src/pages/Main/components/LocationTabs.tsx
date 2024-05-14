import { useAppSelector } from '../../../hooks/useAppSelector.tsx';
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts';
import { setCity } from '../../../store/action.ts';
import { CITIES } from "../../../mocks/cities.ts";

const LocationTabs = () => {
  const city = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((tab) => (
          <li key={tab.title} className="locations__item">
            <button
              className={`locations__item-link tabs__item ${tab.title === city.title ? 'tabs__item--active' : ''}`}
              style={{ border: 'unset', cursor: 'pointer' }}
              onClick={() => dispatch(setCity(tab))}
            >
              <span>{tab.title}</span>
            </button>
          </li>)
        )}
      </ul>
    </section>
  );
};

export default LocationTabs;
