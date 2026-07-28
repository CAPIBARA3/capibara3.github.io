---
author: joanalnu
title: GRB Cosmology
---
# Current Status

> [!NOTE] Statistics Estimations
> 
> The next step is to conduct simulations to compute an expected number of GRBs needed to achieve a target uncertainty on cosmological parameters.
> 

# Important Literature

# $E_\text{peak}-E_\text{iso}$ relation
G. Ghirlanda, G. Ghisellini, D. Lazzati, and C. Firmani, The Astrophysical Journal 613, 13-16 (2005)
G. Ghirlanda, G. Ghisellini and C.Firmani, New Journal of Physics 8, 123-123 (2006)
G. Ghirlanda, L. Nava, G. Ghisellini, C. Firmani, and J. Cabrera, Monthly Notices of the Royal Astronomical Society 387, 319 (2008)

# Main Idea


> [!ABSTRACT]
> Gamma-ray Bursts (GRBs) are short explosions at very high redshift. Being able to standardize them as we have done with Cepheid variable stars or type Ia SNe would allow us to probe the cosmology at high redshifts ($3 < z < 8$).
> 
> Empirical relations are used to standardize them. For example the Amati/Ghirlanda and the Yonetoku relation. These relate measurements such as peak energy or isotropic equivalent energy and relate them with the luminosity distance of a GRBs, thus knowing the parameters of the GRB we can compute cosmological parameters, assuming a specific model.

## Amati/Ghirlanda Relation
$$
\log_{10} E_\text{peak} = a \log_{10} E_\text{iso} + b
$$
Relates the peak spectral energy ($E_\text{peak}$) with the equivalent isotropic energy ($E_\text{iso}$). Since GRBs are jet-driven phenomena, the isotropic equivalent energy is computed via
$$
E_\text{iso} = 4\pi d_L (z, \overline\Omega) \mathcal{F}/(1+z)
$$
With $\overline\Omega$ a specific cosmology and $z$ the redshift arguments of the luminosity distance $d_L(z, \overline\Omega)$. Now we have 2 equations and 3 free variables ($d_L, a, b$).

> [!QUESTION]- Circularity Problem
> The circularity problem is to compute $d_L$ using the empirical relation of observables. However, we don't know the slope and intercept of that linear relation.
> 
> **Solution**
> The solution to the circularity problem is to compute relation parameters $(a_i,b_i)$ over a range of cosmologies $\overline\Omega_i$. Then we evaluate the fit of the relation with the observed data and assume that the "best cosmology" is the one with the lowest $\chi^2$. In other words, we minimize the $\chi^2$ statistic of the relation fit and the data with
> $$
> \chi^2 = \sum_i \frac{\left[\log_{10} E_\text{peak, i} - (a \log_{10} E_\text{iso, i}+b)\right]}{\sigma_{\log E_\text{peak},i}^2 + \sigma_{extra}^2}
> $$

# Resources

- [Joanalnu's Repository](https://github.com/joanalnu/oab-inaf)

> [!INFO] Contact
> currently free project, contact @joanalnu
