import { LoaderSizes } from './constants'
import classnames from './Loader.module.css'

// ----------------------------------------------------------------------

type LoaderSizesTypes = typeof LoaderSizes

// ----------------------------------------------------------------------

const calculateStyle = (i: number): React.CSSProperties => ({
  transform: `rotate(${(i * 360) / 8}deg) translate(0, -130%)`,
  animationDelay: `${-(8 - i) * 0.125}s`,
})

// ----------------------------------------------------------------------

type LoaderProps = {
  size?: LoaderSizesTypes[number]
}

export const Loader = ({ size = 'auto' }: LoaderProps) => (
  <div
    className={classnames.container}
    data-size={size}
  >
    {Array(8)
      .fill(0)
      .map((_, index) => (
        <div
          className={classnames.part}
          key={index}
          style={calculateStyle(index)}
        />
      ))}
  </div>
)
