import React, { useMemo } from 'react';
import { ListItemText, MenuItem, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';

import '../style/navBar.css'
import { Link } from 'react-router-dom';
const MemoizedMenuItem = React.memo(({ item }) => (
    <MenuItem key={item.id}>
        <ListItemText primary={item.title} />
    </MenuItem>
));

const MenuList = () => {
    const itemList = useSelector((state) => state.items);
    const memoizeditemList = useMemo(() => itemList, [itemList]);

    return (
        <div>
            <div className='menu'>
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                 <Link to="/item-list"> {/* Navigate to itemList when clicked */}
          <SettingsIcon />
        </Link>
            </div>
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                {memoizeditemList.map((item) => (
                    <MemoizedMenuItem key={item.id} item={item} />
                ))}
            </Paper>
        </div>
    );
};

export default MenuList;
