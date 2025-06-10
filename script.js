const products = JSON.parse(localStorage.getItem('products')) || [
    { name: 'Iron Tank Top', category: 'recommended', type: 'clothing', price: 34.99, image: 'https://imgs.search.brave.com/7JANZqOsnhJUD3_hLlAZ7E2qJZZ14w1BGx0wd9O4MyM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/NTYvNjE0Ni9maWxl/cy9HWU1TSEFSSy1S/VU5OSU5HLU9ILTQt/NV8xMl8yNC01OTZf/Y29weV9jNjg4MjA1/Yi03ZWYyLTRmM2Qt/ODZhYi00ZjQzMzJl/NTQ4ZWFfMzg0MHgu/anBnP3Y9MTczNzYz/OTI3Ng', images: ['https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQI2iTdQJR5HCIhhRvPyfOmwmLPz-PlBgr3V5cBi8ubaq4SYQTEbWF2DL1oxYwAk0zwEuQsrt9sMfnWCMHEp8pBUSQcu4MieAv4Hq8qRrgHsOh7g7t0Q8z1', 'https://www.risestore.com/cdn/shop/files/M-Elemental-Tank-Top---Army-Green-2_2000x.jpg?v=1709154031', 'https://images-cdn.ubuy.co.in/6690c5c486cdc158f65e5b4d-jc-distro-mens-basic-tank-top-jersey.jpg'], description: 'Premium tank top designed for intense workouts.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 5, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Shred Leggings', category: 'recommended', type: 'clothing', price: 54.99, image: 'https://imgs.search.brave.com/c1IXg7lD5CP945YGfbyz25_ZkqaNsF2QCnomHuzT81I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92c2hy/ZWR0aHJlYWRzLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy93X2Vz/c2VudGlhbF9sZWdn/aW5nX2dyZXlfMV93/ZWIuanBnP2Nyb3A9/cmVnaW9uJmNyb3Bf/aGVpZ2h0PTUzMiZj/cm9wX2xlZnQ9MCZj/cm9wX3RvcD04OSZj/cm9wX3dpZHRoPTUz/MiZ2PTE3MTE2NDkx/NjEmd2lkdGg9NTMy', images: ['https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c09a6a600184f6eb5a353cd52eb45c1_9366/Ultimate_Running_7-8_Leggings_Black_HY2909_HM1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRiyI5vl0WtlK4DyFa-CSbaZqoCNCFyW0Lg&s', 'https://shop.teamsg.in/cdn/shop/files/15_2.jpg?v=1712299668https://shop.teamsg.in/cdn/shop/files/15_2.jpg?v=1712299668'], description: 'High-performance leggings for ultimate flexibility.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 7, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Grind Shorts', category: 'recommended', type: 'clothing', price: 44.99, image: 'https://imgs.search.brave.com/wbSE74Ms2gNMcmugheiIdnpw3E_qnpdnbSfftqh4brA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZ3JpbmRhdGhs/ZXRpY3MuY29tL2Nk/bi9zaG9wL2ZpbGVz/L3RoZS1ncmluZC1h/dGhsZXRpY3MtY2xh/c3NpYy1ncmluZC1z/aG9ydHMtYmxhY2st/YXhlcy0zNDM3MjA4/ODE2ODU0NS5qcGc_/dj0xNzAyNjY3Mjg5/JndpZHRoPTEyODA', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fYZlnNbqgb9zN5ush3HEcOjRjopdqjxuBw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWFMRxa4yVlyqmiGRtqq9civ0IJKUFtU6IA&s', 'https://assets.adidas.com/images/w_600,f_auto,q_auto/99bf271d855940adb47141fe9cdcde1b_9366/Designed_for_Training_Workout_Shorts_Pink_IS9004_21_model.jpg'], description: 'Durable shorts for high-intensity training.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 4, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Beast Pack', category: 'recommended', type: 'accessory', price: 69.99, image: 'https://imgs.search.brave.com/aoVtqBy3UYpy7u8gN1xa4rFlS9xT4qx2XSzEr9Cf1Zs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWls/dGZvcmF0aGxldGVz/LmNvbS9jZG4vc2hv/cC9maWxlcy9CRkFf/Y2xvdGhpbmdfc2hv/b3RfMXgxLTQ4MC5q/cGc_dj0xNzQzNjA0/MjE5JndpZHRoPTMx/OTA', images: ['https://www.jiomart.com/images/product/original/rvr98invnp/muscleblaze-hybrid-gym-bag-cum-backpack-duffle-bag-for-men-and-women-black-40-l-legal-images-orvr98invnp-p595113486-7-202211071147.jpg?im=Resize=(420,420)', 'https://www.prowolf.in/cdn/shop/files/raptor-gym-backpack-40l-for-powerlifting-weightliftingbackpackbp40-blk-275928.jpg?v=1735147567', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BidDnJn-IwoIbuRk6ImEGmiSLt7RThAhKg&s'], description: 'Heavy-duty backpack for gym essentials.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 6, sizes: ['One Size'] },
    { name: 'Titan Hoodie', category: 'mens', type: 'clothing', price: 59.99, image: 'https://imgs.search.brave.com/E7ESM2YnOQXC98MtKJydrjF6Gly6ZNswTokudSfDQrs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF2ZnR0M1VxdUwu/anBn', images: ['https://imgs.search.brave.com/E7ESM2YnOQXC98MtKJydrjF6Gly6ZNswTokudSfDQrs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF2ZnR0M1VxdUwu/anBn', 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/31015238/2024/10/17/169fdb8a-7984-4145-89b4-8b988dda8f581729152817241-NOBERO-Men-Hooded-Sweatshirt-8561729152816712-1.jpg', 'https://i.etsystatic.com/25170833/c/2244/1784/143/28/il/122c8d/4151562635/il_340x270.4151562635_282i.jpg'], description: 'Warm and durable hoodie for cool gym sessions.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 5, sizes: ['S', 'M', 'L', 'XL'] },
    {  name: 'Forge Jacket', category: 'mens', type: 'clothing', price: 79.99, image: 'https://imgs.search.brave.com/L_NU79xM6fRcFlP42N5Xbg3eHQki0db3xxBFp-jalv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF4LUZqUWU4YUwu/anBn', images: ['https://imgs.search.brave.com/L_NU79xM6fRcFlP42N5Xbg3eHQki0db3xxBFp-jalv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF4LUZqUWU4YUwu/anBn', 'https://imgs.search.brave.com/L_NU79xM6fRcFlP42N5Xbg3eHQki0db3xxBFp-jalv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF4LUZqUWU4YUwu/anBn'], description: 'Lightweight jacket for outdoor training.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 6, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Power Tee', category: 'mens', type: 'clothing', price: 29.99, image: 'https://imgs.search.brave.com/qGVpt8dohfzGzXd2xMmrEd6k0IVH3ipcnjZkyn4ishc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFUT2ZTRmIwK0wu/anBn', images: ['https://imgs.search.brave.com/qGVpt8dohfzGzXd2xMmrEd6k0IVH3ipcnjZkyn4ishc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFUT2ZTRmIwK0wu/anBn', 'https://5.imimg.com/data5/SELLER/Default/2022/1/PE/DD/HV/7278776/gym-jackets-for-men-500x500.jpg', 'https://images.meesho.com/images/products/57626916/mza6f_512.webp'], description: 'Breathable t-shirt for heavy lifts.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 4, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Flex Sports Bra', category: 'womens', type: 'clothing', price: 39.99, image: 'https://imgs.search.brave.com/ZhZTfdx3Q6N8jGBYFl_ffjX3k6PQvpYDe0sPZIissX4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFDaGtYVk1PQkwu/anBn', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mD_ZYVJL2q6PA2-YqbGWogX7gyur-G_OvA&s', 'https://bodysize.in/cdn/shop/files/Side_Hook_Padded_Sports_Bra_Purple.png?v=1742974875', 'https://ttbazaar.com/cdn/shop/products/2_c9d2e9ec-9945-4fde-9559-2d536fdab433.jpg?v=1748593502'], description: 'Supportive sports bra for high-impact workouts.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 7, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Pulse Crop Top', category: 'womens', type: 'clothing', price: 34.99, image: 'https://imgs.search.brave.com/PzKFXdLqQ9UEPHsx8WmyOAM-kVoUA36q-Vn0ZC4GmCU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50cy5tZWRpYWRl/Y2F0aGxvbi5jb20v/bTE5NTc3NzQzL2sk/YTNiZGRmOGI1MWRk/ODFkYWI1YjZiMzli/NTI4NjQyNmYvcGlj/dHVyZS5qcGc_Zm9y/bWF0PWF1dG8mZj0z/MDAweDA', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGtn-udwKQ9h5WmfQX-7popVUHKiC7zlLqQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ftybZIULcErD7LfTqwUvgktAdSyurO-0Ww&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W4wPR-JdmAzvqwLgHZruN1Y2R6mXkYCV9g&s'], description: 'Stylish crop top for gym and casual wear.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 5, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Vibe Tights', category: 'womens', type: 'clothing', price: 49.99, image: 'https://imgs.search.brave.com/cSJJwvfSExrjvVFegnUpompXy_4PilytVlY4eeSRTmg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFybzFHVHhPbUwu/anBn', images: ['https://imgs.search.brave.com/cSJJwvfSExrjvVFegnUpompXy_4PilytVlY4eeSRTmg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFybzFHVHhPbUwu/anBn', 'https://shop.teamsg.in/cdn/shop/files/4_1f42441d-a367-4294-aa97-1f14c6ad5a8f.jpg?v=1726146905&width=1445', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl_DdEB4mv3p03gnJEh6i1W-dyOke-3dBPA&s'], description: 'Compression tights for enhanced performance.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 6, sizes: ['S', 'M', 'L', 'XL'] },
    { name: 'Pro Dumbbell', category: 'equipment', type: 'equipment', price: 99.99, image: 'https://imgs.search.brave.com/N18yHNg9y9M0i7NatxYoUsRL8Lfu55kfssIW0FMHNOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dW1iZWxscy1zdGls/bC1saWZlLXN0dWRp/b18yMy0yMTUxNzQ3/MjYyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA', images: ['https://imgs.search.brave.com/N18yHNg9y9M0i7NatxYoUsRL8Lfu55kfssIW0FMHNOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dW1iZWxscy1zdGls/bC1saWZlLXN0dWRp/b18yMy0yMTUxNzQ3/MjYyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA', 'https://imgs.search.brave.com/N18yHNg9y9M0i7NatxYoUsRL8Lfu55kfssIW0FMHNOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dW1iZWxscy1zdGls/bC1saWZlLXN0dWRp/b18yMy0yMTUxNzQ3/MjYyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA', 'https://imgs.search.brave.com/N18yHNg9y9M0i7NatxYoUsRL8Lfu55kfssIW0FMHNOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/dW1iZWxscy1zdGls/bC1saWZlLXN0dWRp/b18yMy0yMTUxNzQ3/MjYyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA'], description: 'Adjustable dumbbell for versatile workouts.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 8, weights: ['5kg', '10kg', '15kg', '20kg'] },
    { name: 'Elite Barbell', category: 'equipment', type: 'equipment', price: 199.99, image: 'https://imgs.search.brave.com/nvgVWe4D_YwY3w4FOfLDEEdgVuZnJdFbGuZ8NwLTPSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ka3Mu/c2NlbmU3LmNvbS9p/cy9pbWFnZS9ka3Nj/ZG4vMjJCU0RBRlhE/Q1JMQlJCTExXQkFf/aXMvP3dpZD0yNTIm/aGVpPTI1MiZxbHQ9/ODUsMCZmbXQ9anBn/Jm9wX3NoYXJwZW49/MQ.jpeg', images: ['https://imgs.search.brave.com/nvgVWe4D_YwY3w4FOfLDEEdgVuZnJdFbGuZ8NwLTPSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ka3Mu/c2NlbmU3LmNvbS9p/cy9pbWFnZS9ka3Nj/ZG4vMjJCU0RBRlhE/Q1JMQlJCTExXQkFf/aXMvP3dpZD0yNTIm/aGVpPTI1MiZxbHQ9/ODUsMCZmbXQ9anBn/Jm9wX3NoYXJwZW49/MQ.jpeg', 'https://imgs.search.brave.com/nvgVWe4D_YwY3w4FOfLDEEdgVuZnJdFbGuZ8NwLTPSQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ka3Mu/c2NlbmU3LmNvbS9p/cy9pbWFnZS9ka3Nj/ZG4vMjJCU0RBRlhE/Q1JMQlJCTExXQkFf/aXMvP3dpZD0yNTIm/aGVpPTI1MiZxbHQ9/ODUsMCZmbXQ9anBn/Jm9wX3NoYXJwZW49/MQ.jpeg'], description: 'Olympic-grade barbell for heavy lifting.', seller: { name: 'FitGear Co.', contact: 'support@fitgear.com', rating: 4.5 }, deliveryDays: 10, weights: ['20kg', '25kg', '30kg', '35kg'] },
    { name: 'Kettlebell', category: 'equipment', type: 'equipment', price: 59.99, image: 'https://imgs.search.brave.com/PGLFPGsadaq6Owtq4HTaYFk-_HQIzIfuRDX8VJEsG7Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzQzLzM4LzU4/LzM2MF9GXzk0MzM4/NTgxNF9YanFTblpm/djJ6d1Y2eWdLRndM/a0dtN0pUc3lnRjgx/Ny5qcGc', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW39D3j_DmP311BtnKswjDWtuPUvl_njMybA&s', 'https://imgs.search.brave.com/PGLFPGsadaq6Owtq4HTaYFk-_HQIzIfuRDX8VJEsG7Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzQzLzM4LzU4/LzM2MF9GXzk0MzM4/NTgxNF9YanFTblpm/djJ6d1Y2eWdLRndM/a0dtN0pUc3lnRjgx/Ny5qcGc', 'https://imgs.search.brave.com/PGLFPGsadaq6Owtq4HTaYFk-_HQIzIfuRDX8VJEsG7Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzQzLzM4LzU4/LzM2MF9GXzk0MzM4/NTgxNF9YanFTblpm/djJ6d1Y2eWdLRndM/a0dtN0pUc3lnRjgx/Ny5qcGc'], description: 'Cast iron kettlebell for strength training.', seller: { name: 'Titan Sports', contact: 'contact@titansports.com', rating: 4.8 }, deliveryDays: 7, weights: ['5kg', '10kg', '15kg', '20kg'] }
    


];

let checkoutItems = [];

window.onload = function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const username = sessionStorage.getItem('username');
    if (isLoggedIn === 'true' && username) {
        document.getElementById('auth-buttons').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('username-display').textContent = username;
    }
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    document.getElementById('signupRole').addEventListener('change', toggleSellerFields);
    document.getElementById('productType').addEventListener('change', function() {
        const sizeFields = document.getElementById('sizeFields');
        const weightFields = document.getElementById('weightFields');
        
        if (this.value === 'equipment') {
            sizeFields.style.display = 'none';
            weightFields.style.display = 'block';
        } else {
            sizeFields.style.display = 'block';
            weightFields.style.display = 'none';
        }
    });
    renderProductGrids();
    updateCart();
    updateWishlist();
};

function toggleSellerFields() {
    const role = document.getElementById('signupRole').value;
    const sellerFields = document.getElementById('sellerFields');
    sellerFields.style.display = role === 'seller' ? 'block' : 'none';
}

function renderProductGrids() {
    const grids = {
        recommended: document.getElementById('recommendedGrid'),
        mens: document.getElementById('mensGrid'),
        womens: document.getElementById('womensGrid'),
        equipment: document.getElementById('equipmentGrid')
    };

    Object.keys(grids).forEach(category => {
        grids[category].innerHTML = '';
        const categoryProducts = products.filter(p => p.category === category);
        categoryProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const detail = product.type === 'equipment' ? `Available Weights: ${product.weights.join(', ')}` : `Available Sizes: ${product.sizes.join(', ')}`;
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <p class="details">${detail}</p>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.type === 'equipment' ? product.weights[0] : product.sizes[0]}')">Add to Cart</button>
                <button class="add-to-wishlist" onclick="addToWishlist('${product.name}', ${product.price}, '${product.type === 'equipment' ? product.weights[0] : product.sizes[0]}')">Add to Wishlist</button>
            `;
            
            
            card.addEventListener('click', (event) => {
                
                if (!event.target.classList.contains('add-to-cart') && !event.target.classList.contains('add-to-wishlist')) {
                    showProductDetails(product.name);
                }
            });
            
            
            card.style.cursor = 'pointer';
            
            grids[category].appendChild(card);
        });
    });
}

function addToCart(name, price, variant) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.name === name && item.variant === variant);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, variant, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('Added to Cart', `${name} (${variant}) has been added to your cart!`);
    updateCart();
}

function addToCartFromDetails() {
    const productName = document.getElementById('productName').textContent;
    const product = products.find(p => p.name === productName);
    const variant = product.type === 'equipment' ? document.getElementById('weight').value : document.getElementById('size').value;
    if (product) {
        addToCart(product.name, product.price, variant);
    }
}

function addToWishlist(name, price, variant) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.some(item => item.name === name && item.variant === variant)) {
        wishlist.push({ name, price, variant });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to Wishlist', `${name} (${variant}) has been added to your wishlist!`);
        updateWishlist();
    } else {
        showNotification('Already in Wishlist', `${name} (${variant}) is already in your wishlist!`);
    }
}

function addToWishlistFromDetails() {
    const productName = document.getElementById('productName').textContent;
    const product = products.find(p => p.name === productName);
    const variant = product.type === 'equipment' ? document.getElementById('weight').value : document.getElementById('size').value;
    if (product) {
        addToWishlist(product.name, product.price, variant);
    }
}

function removeFromCart(name, variant) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => !(item.name === name && item.variant === variant));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function removeFromWishlist(name, variant) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(item => !(item.name === name && item.variant === variant));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlist();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.variant}, x${item.quantity})</span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}', '${item.variant}')">Remove</button>
        `;
        cartItems.appendChild(itemElement);
    });

    document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
}

function updateWishlist() {
    const wishlistItems = document.getElementById('wishlistItems');
    wishlistItems.innerHTML = '';
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    wishlist.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'wishlist-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.variant})</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromWishlist('${item.name}', '${item.variant}')">Remove</button>
        `;
        wishlistItems.appendChild(itemElement);
    });
}

function showNotification(title, message) {
    const notificationPopup = document.getElementById('notificationPopup');
    const notificationOverlay = document.getElementById('notificationOverlay');
    const notificationTitle = document.getElementById('notificationTitle');
    const notificationMessage = document.getElementById('notificationMessage');

    notificationTitle.textContent = title;
    notificationMessage.textContent = message;
    notificationPopup.style.display = 'block';
    notificationOverlay.style.display = 'block';

    setTimeout(() => {
        toggleNotification();
    }, 2000);
}

function toggleNotification() {
    const notificationPopup = document.getElementById('notificationPopup');
    const notificationOverlay = document.getElementById('notificationOverlay');
    notificationPopup.style.display = 'none';
    notificationOverlay.style.display = 'none';
}

function toggleWishlist() {
    const wishlistPopup = document.getElementById('wishlistPopup');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    if (wishlistPopup.style.display === 'block') {
        wishlistPopup.style.display = 'none';
        wishlistOverlay.style.display = 'none';
    } else {
        updateWishlist();
        wishlistPopup.style.display = 'block';
        wishlistOverlay.style.display = 'block';
    }
}

function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartPopup.style.display === 'block') {
        cartPopup.style.display = 'none';
        cartOverlay.style.display = 'none';
    } else {
        updateCart();
        cartPopup.style.display = 'block';
        cartOverlay.style.display = 'block';
    }
}

function toggleAbout() {
    const aboutPopup = document.getElementById('aboutPopup');
    const aboutOverlay = document.getElementById('aboutOverlay');
    if (aboutPopup.style.display === 'block') {
        aboutPopup.style.display = 'none';
        aboutOverlay.style.display = 'none';
    } else {
        aboutPopup.style.display = 'block';
        aboutOverlay.style.display = 'block';
    }
}

function toggleLogin() {
    const loginPopup = document.getElementById('loginPopup');
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginPopup.style.display === 'block') {
        loginPopup.style.display = 'none';
        loginOverlay.style.display = 'none';
    } else {
        loginPopup.style.display = 'block';
        loginOverlay.style.display = 'block';
    }
}

function toggleSignup() {
    const signupPopup = document.getElementById('signupPopup');
    const signupOverlay = document.getElementById('signupOverlay');
    if (signupPopup.style.display === 'block') {
        signupPopup.style.display = 'none';
        signupOverlay.style.display = 'none';
    } else {
        signupPopup.style.display = 'block';
        signupOverlay.style.display = 'block';
        toggleSellerFields();
    }
}

function toggleCheckout() {
    const checkoutPopup = document.getElementById('checkoutPopup');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    if (checkoutPopup.style.display === 'block') {
        checkoutPopup.style.display = 'none';
        checkoutOverlay.style.display = 'none';
    } else {
        checkoutPopup.style.display = 'block';
        checkoutOverlay.style.display = 'block';
    }
}

function handleLogin() {
    const loginType = document.getElementById('loginType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showNotification('Login Failed', 'Please enter both username and password.');
        return;
    }

    let user;
    if (loginType === 'admin' && username === 'admin' && password === 'admin123') {
        user = { username: 'admin', role: 'admin' };
    } else {
        const users = JSON.parse(sessionStorage.getItem('users') || '[]');
        user = users.find(u => u.username === username && u.password === password && u.role === loginType);
    }

    if (!user) {
        showNotification('Login Failed', 'Invalid username, password, or role.');
        return;
    }

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('role', loginType);

    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('username-display').textContent = username;

    // Add seller dashboard button for sellers
    if (loginType === 'seller') {
        const userInfo = document.getElementById('user-info');
        const dashboardButton = document.createElement('button');
        dashboardButton.textContent = 'Seller Dashboard';
        dashboardButton.onclick = toggleSellerDashboard;
        dashboardButton.style.marginLeft = '10px';
        userInfo.appendChild(dashboardButton);
    }

    showNotification('Login Success', `Welcome, ${loginType === 'seller' ? 'Seller ' : ''}${username}!`);
    toggleLogin();
}

function handleSignup() {
    const role = document.getElementById('signupRole').value;
    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const storeName = role === 'seller' ? document.getElementById('signupStoreName').value : '';
    const contactEmail = role === 'seller' ? document.getElementById('signupContactEmail').value : '';

    if (!email || !username || !password || !confirmPassword) {
        showNotification('Signup Failed', 'Please fill out all required fields.');
        return;
    }

    if (role === 'seller' && (!storeName || !contactEmail)) {
        showNotification('Signup Failed', 'Please provide store name and contact email for seller account.');
        return;
    }

    if (!email.match(/^[^\s@]+@gmail\.com$/)) {
        showNotification('Signup Failed', 'Please enter a valid Gmail address.');
        return;
    }

    if (role === 'seller' && !contactEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showNotification('Signup Failed', 'Please enter a valid contact email for seller account.');
        return;
    }

    const users = JSON.parse(sessionStorage.getItem('users') || '[]');
    if (users.some(u => u.username === username)) {
        showNotification('Signup Failed', 'Username already exists.');
        return;
    }

    if (password.length < 6) {
        showNotification('Signup Failed', 'Password must be at least 6 characters.');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('Signup Failed', 'Passwords do not match.');
        return;
    }

    const userData = { email, username, password, role };
    if (role === 'seller') {
        userData.storeName = storeName;
        userData.contactEmail = contactEmail;
    }
    users.push(userData);
    sessionStorage.setItem('users', JSON.stringify(users));

    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('role', role);

    document.getElementById('auth-buttons').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('username-display').textContent = username;

    showNotification('Signup Success', `Welcome, ${role === 'seller' ? 'Seller ' : ''}${username}!`);
    toggleSignup();
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');

    document.getElementById('auth-buttons').style.display = 'flex';
    document.getElementById('user-info').style.display = 'none';

    showNotification('Logged Out', 'You have been logged out successfully.');
}

function buyNowWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.length === 0) {
        showNotification('Wishlist Empty', 'Your wishlist is empty!');
        return;
    }
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        showNotification('Login Required', 'Please log in to proceed with checkout.');
        toggleWishlist();
        toggleLogin();
        return;
    }
    checkoutItems = wishlist;
    updateCheckout();
    toggleWishlist();
    toggleCheckout();
}

function buyNowCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        showNotification('Cart Empty', 'Your cart is empty!');
        return;
    }
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        showNotification('Login Required', 'Please log in to proceed with checkout.');
        toggleCart();
        toggleLogin();
        return;
    }
    checkoutItems = cart;
    updateCheckout();
    toggleCart();
    toggleCheckout();
}

function updateCheckout() {
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = '';
    let total = 0;

    checkoutItems.forEach(item => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        total += itemTotal;
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.variant}, x${quantity})</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        orderSummary.appendChild(itemElement);
    });

    document.getElementById('totalAmount').textContent = `Total: $${total.toFixed(2)}`;
}

function confirmOrder() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    const country = document.getElementById('country').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!fullName || !address || !city || !zipCode || !country || !paymentMethod) {
        showNotification('Incomplete Form', 'Please fill out all fields.');
        return;
    }

    showNotification('Order Confirmed', `Your order has been placed successfully! Payment via ${paymentMethod}.`);
    if (checkoutItems === JSON.parse(localStorage.getItem('cart') || '[]')) {
        localStorage.setItem('cart', '[]');
        updateCart();
    } else if (checkoutItems === JSON.parse(localStorage.getItem('wishlist') || '[]')) {
        localStorage.setItem('wishlist', '[]');
        updateWishlist();
    }
    checkoutItems = [];
    toggleCheckout();
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchPopup = document.getElementById('searchPopup');
    const productCards = document.querySelectorAll('.product-card');
    searchPopup.innerHTML = '';

    if (searchInput.trim() === '') {
        searchPopup.style.display = 'none';
        productCards.forEach(card => {
            card.style.display = 'block';
        });
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = productName.includes(searchInput) ? 'block' : 'none';
    });

    if (filteredProducts.length === 0) {
        searchPopup.style.display = 'none';
    } else {
        filteredProducts.forEach(product => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result';
            const defaultVariant = product.type === 'equipment' ? product.weights[0] : product.sizes[0];
            resultElement.innerHTML = `
                <span>${product.name} - $${product.price.toFixed(2)}</span>
                <button onclick="addToCart('${product.name}', ${product.price}, '${defaultVariant}')">Add to Cart</button>
            `;
            resultElement.addEventListener('click', () => {
                showProductDetails(product.name);
                searchPopup.style.display = 'none';
            });
            searchPopup.appendChild(resultElement);
        });
        searchPopup.style.display = 'block';
    }
}

function showProductDetails(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        document.getElementById('mainContent').style.display = 'none';
        const productDetails = document.getElementById('productDetails');
        productDetails.style.display = 'flex';
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('mainImage').src = product.images[0];
        document.getElementById('sellerName').textContent = `Seller: ${product.seller.name}`;
        document.getElementById('sellerContact').textContent = `Contact: ${product.seller.contact}`;
        document.getElementById('sellerRating').textContent = `Rating: ${product.seller.rating}/5`;
        document.getElementById('deliveryTime').textContent = `Estimated Delivery: ${product.deliveryDays} business days`;

        const sizeSelector = document.getElementById('sizeSelector');
        const weightSelector = document.getElementById('weightSelector');
        if (product.type === 'equipment') {
            sizeSelector.style.display = 'none';
            weightSelector.style.display = 'block';
            const weightSelect = document.getElementById('weight');
            weightSelect.innerHTML = product.weights.map(w => `<option value="${w}">${w}</option>`).join('');
        } else {
            sizeSelector.style.display = 'block';
            weightSelector.style.display = 'none';
            const sizeSelect = document.getElementById('size');
            sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
        }

        const thumbnailGallery = document.getElementById('thumbnailGallery');
        thumbnailGallery.innerHTML = '';
        product.images.forEach(image => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.className = 'thumbnail';
            thumbnail.alt = product.name;
            thumbnail.onclick = () => document.getElementById('mainImage').src = image;
            thumbnailGallery.appendChild(thumbnail);
        });
    }
}

function backToShop() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('productDetails').style.display = 'none';
    document.getElementById('searchInput').value = '';
    searchProducts();
}
function handleAddProduct(event) {
    try {
        event.preventDefault();
        
        const name = document.getElementById('productName').value;
        const category = document.getElementById('productCategory').value;
        const type = document.getElementById('productType').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const mainImage = document.getElementById('productImage').value;
        const additionalImages = document.getElementById('productImages').value.split(',').map(url => url.trim());
        const description = document.getElementById('productDescription').value;
        const deliveryDays = parseInt(document.getElementById('deliveryDays').value);
        
        // Validate inputs
        if (!name || !category || !type || isNaN(price) || !mainImage || !description || isNaN(deliveryDays)) {
            showNotification('Error', 'Please fill out all required fields correctly.');
            return;
        }
        
        if (price <= 0) {
            showNotification('Error', 'Price must be greater than 0.');
            return;
        }
        
        if (deliveryDays <= 0) {
            showNotification('Error', 'Delivery days must be greater than 0.');
            return;
        }
        
        // Get selected sizes or weights
        let variants = [];
        if (type === 'clothing') {
            const sizeCheckboxes = document.querySelectorAll('input[name="size"]:checked');
            variants = Array.from(sizeCheckboxes).map(cb => cb.value);
        } else {
            const weightCheckboxes = document.querySelectorAll('input[name="weight"]:checked');
            variants = Array.from(weightCheckboxes).map(cb => cb.value);
        }
        
        if (variants.length === 0) {
            showNotification('Error', 'Please select at least one size or weight variant.');
            return;
        }
        
        // Get seller information
        const username = sessionStorage.getItem('username');
        const users = JSON.parse(sessionStorage.getItem('users') || '[]');
        const seller = users.find(u => u.username === username);
        
        if (!seller) {
            showNotification('Error', 'Seller information not found. Please log in again.');
            return;
        }
     
        
       
        products.push(newProduct);
        
       
        localStorage.setItem('products', JSON.stringify(products));
        
       
        event.target.reset();
        document.getElementById('sizeFields').style.display = 'none';
        document.getElementById('weightFields').style.display = 'none';
        
       
        showNotification('Success', 'Product added successfully!');
        
       
        loadSellerProducts();
        
        
        renderProductGrids();
    } catch (error) {
        console.error('Error adding product:', error);
        showNotification('Error', 'Failed to add product. Please try again.');
    }
}

function loadSellerProducts() {
    try {
        const username = sessionStorage.getItem('username');
        const users = JSON.parse(sessionStorage.getItem('users') || '[]');
        const seller = users.find(u => u.username === username);
        
        if (!seller) {
            console.error('Seller not found');
            return;
        }
        
        const sellerProducts = products.filter(p => p.seller.name === seller.storeName);
        const sellerProductsContainer = document.getElementById('sellerProducts');
        
        if (!sellerProductsContainer) {
            console.error('Seller products container not found');
            return;
        }
        
        sellerProductsContainer.innerHTML = sellerProducts.map(product => `
            <div class="seller-product-card">
                <h4>${product.name}</h4>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Type: ${product.type}</p>
                <p>Delivery: ${product.deliveryDays} days</p>
                <div class="seller-product-actions">
                    <button class="edit-product-btn" onclick="editProduct('${product.name}')">Edit</button>
                    <button class="delete-product-btn" onclick="deleteProduct('${product.name}')">Delete</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading seller products:', error);
        showNotification('Error', 'Failed to load seller products. Please try again.');
    }
}

function editProduct(productName) {
    try {
        const product = products.find(p => p.name === productName);
        if (!product) {
            showNotification('Error', 'Product not found.');
            return;
        }
        
        // Populate form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productType').value = product.type;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productImage').value = product.image;
        document.getElementById('productImages').value = product.images.slice(1).join(', ');
        document.getElementById('productDescription').value = product.description;
        document.getElementById('deliveryDays').value = product.deliveryDays;
        
        // Show appropriate variant fields
        const sizeFields = document.getElementById('sizeFields');
        const weightFields = document.getElementById('weightFields');
        
        if (product.type === 'equipment') {
            sizeFields.style.display = 'none';
            weightFields.style.display = 'block';
            product.weights.forEach(weight => {
                const checkbox = document.querySelector(`input[name="weight"][value="${weight}"]`);
                if (checkbox) checkbox.checked = true;
            });
        } else {
            sizeFields.style.display = 'block';
            weightFields.style.display = 'none';
            product.sizes.forEach(size => {
                const checkbox = document.querySelector(`input[name="size"][value="${size}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
       
        toggleSellerDashboard();
    } catch (error) {
        console.error('Error editing product:', error);
        showNotification('Error', 'Failed to edit product. Please try again.');
    }
}

function deleteProduct(productName) {
    try {
        if (confirm('Are you sure you want to delete this product?')) {
            const index = products.findIndex(p => p.name === productName);
            if (index !== -1) {
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                loadSellerProducts();
                renderProductGrids();
                showNotification('Success', 'Product deleted successfully!');
            } else {
                showNotification('Error', 'Product not found.');
            }
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        showNotification('Error', 'Failed to delete product. Please try again.');
    }
} 