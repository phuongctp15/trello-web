import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { Home } from '@mui/icons-material'
import { pink } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function SelectSmall() {
  const { mode, setMode } = useColorScheme('light')
  const handleChange = (e) => {
    setMode(e.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-color-mode">Mode</InputLabel>
      <Select
        labelId="label-select-color-mode"
        id="select-color-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <DarkModeIcon fontSize="small" /> Dark
          </div>
        </MenuItem>

        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <SelectSmall />
      <hr />
      <ModeToggle />
      <hr />
      <Button variant="contained">Hello world</Button>
      <AccessAlarmIcon />
      <ThreeDRotation />
      <Home sx={{ color: pink[500] }} />
    </>
  )
}

export default App
