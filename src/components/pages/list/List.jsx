import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetList } from '../../store/list/action';
import { DotPulse } from '@uiball/loaders'
import { ListCard } from '../../component/userlist/ListCard';

const List = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    const data = useSelector((state) =>
        state.list.lists.map((list, ind) => ({
            ...list,
            id: ind + 1
        })));

        console.log(useSelector((state)=>state.user))

    useEffect(() => {

        setTimeout(() => {
            dispatch(GetList());
            setLoading(false)
        }, 1000)
    }, [dispatch]);

    // useEffect(()=>{

    // },[])
    return (
        <div className='mt-24 w-full md:pr-[5rem]'>
            {
                loading ? <div className='h-[50vh] flex justify-center items-center'><DotPulse
                    size={40}
                    speed={1.3}
                    color="blue"
                /></div>
                    :
                    <div className='list-con'>
                        {
                            data.length < 0 ?
                                <div className='h-[50vh] flex justify-center items-center'><DotPulse
                                    size={40}
                                    speed={1.3}
                                    color="blue"
                                /></div>
                                :
                                <ListCard data={data} />

                        }
                    </div>

            }


        </div>
    );
};

export default List;




