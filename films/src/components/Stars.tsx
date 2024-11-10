import Star from "./Star";

interface StarsProps{
    count:number
}

function Stars({count}:StarsProps){
    const countProp = (count === undefined || count === null) ? 0 : count;

    if (countProp>=1 && countProp<=5) {
        let stars=[];
        for(let i=1;i<=countProp;i++){
            stars.push(i);
        }
        return (
            <ul className="card-body-stars u-clearfix">
                {
                     stars.map((item) => {
                     return (
                          <li className="horizontal" key={item}>
                              <Star/>
                          </li>
                      )
                    })
                }
            </ul>
        )
    }
};

export default Stars;