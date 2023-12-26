
async function test()
{
    let res = await fetch("https://api.64clouds.com/v1/");
    let data = await res.json();
}

test();
