import React, {useState} from "react";
import s from './Settings.module.scss';
import {styled} from '@mui/system';
import SwitchUnstyled, {switchUnstyledClasses} from '@mui/base/SwitchUnstyled';
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {MenuItem} from "@mui/material";

const Settings = React.memo(() => {
    const blue = {
        500: '#007FFF',
    };

    const grey = {
        400: '#BFC7CF',
        500: '#AAB4BE',
    };
    const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

    const label = {componentsProps: {input: {'aria-label': 'Demo switch'}}};
    let [age, setAge] = useState('2')
    const handleChange = (e: SelectChangeEvent) => {
        setAge(e.target.value as string)
    }
    return (
        <div className={s.settings}>
            <div className={s.item}>Dark Theme<SwitchUnstyled className={s.settings__switch} component={Root} {...label}
                                                              defaultChecked={false} disabled={true}/></div>
            <div className={s.item}>
                Language
                <Select className={s.settings__select} value={age} onChange={handleChange}>
                    <MenuItem value={1}>Russian</MenuItem>
                    <MenuItem value={2}>English(US)</MenuItem>
                    <MenuItem value={3}>Spanish</MenuItem>
                    <MenuItem value={4}>German</MenuItem>
                    <MenuItem value={5}>English(UK)</MenuItem>
                    <MenuItem value={5}>Ukrain</MenuItem>
                </Select>
            </div>
        </div>
    );
})
export default Settings

