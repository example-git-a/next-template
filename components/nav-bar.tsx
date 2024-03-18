import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import SettingsIcon from '@mui/icons-material/Settings';

// https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/dashboard/Dashboard.tsx#L62

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

export default function NavBar({ open, toggleDrawer }: { open: boolean, toggleDrawer: () => void }) {
    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                {/* <ListItemButton>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItemButton> */}
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Integrations" />
                </ListItemButton>
                <ListItemButton href='/settings'>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stteings" />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
                <ListSubheader component="div" inset>
                    Saved reports
                </ListSubheader>
                <ListItemButton>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Current month" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Last quarter" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Year-end sale" />
                </ListItemButton>
            </List>
        </Drawer>
    );
}