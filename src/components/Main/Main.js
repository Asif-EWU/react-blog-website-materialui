import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import SinglePost from '../SinglePost/SinglePost';
import './Main.css';
import Profile from '../Profile/Profile';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        marginTop: theme.spacing(2),
        },
    },
}));

const Main = () => {
    const [posts, setPosts] = useState([]);

    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(()=>{
        const start = (page - 1) * 10;
        const url = `http://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [page]);
    

    return (
        <div className="main">
            <Profile />
            
            <div className="post-list">
                {
                    posts.map(post => <SinglePost key={post.id.toString()} post={post} />)
                }
                <br/>

                <div style={{float: "right"}} className={classes.root}>
                    <Pagination count={10} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
                </div>
            </div>
        </div>
    );
};

export default Main;