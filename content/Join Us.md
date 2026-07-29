---
aliases:
  - join-us
---
# Apply to the Collaboration
Become part of the next generation of space scientists and engineers.

**Why join us?**
* **No experience required**
* **Fully remote**
* **International team**
* **Learn by doing**

---

## 🛰️ Applying to a specific programme?
If you know which programme you'd like to join, use a dedicated form for a faster process:
* [[GAMMA/index|GAMMA Info]]
* [[CRD|CRD Info]]

---

## 📋 How It Works

1. **Read the Guidelines:** Review the [Membership Policy](docs/membership-policy) to understand expectations and roles in the collaboration.
2. **Fill the Form:** Takes about 5 minutes. We use your answers to assign you to a working group — not to filter. Everyone is welcome.
3. **Submit Documents:** Once accepted, you'll sign a short membership agreement. Optionally include a CV or motivation letter.

---

## Application Form

<form action="https://formspree.io/f/xdkrorpp" method="POST" enctype="multipart/form-data">

  <h3 style="margin-top: 1rem;">Personal Information</h3>
  
  <div style="margin-bottom: 1rem;">
    <label for="full_name">Full Name *</label><br>
    <input type="text" id="full_name" name="full_name" required placeholder="Your full name" style="width: 100%; padding: 8px; margin-top: 5px;">
  </div>
  
  <div style="margin-bottom: 1rem;">
    <label for="email">Email Address *</label><br>
    <input type="email" id="email" name="email" required placeholder="you@university.edu" style="width: 100%; padding: 8px; margin-top: 5px;">
  </div>

  <div style="margin-bottom: 1rem;">
    <label for="birthday">Date of Birth *</label><br>
    <input type="date" id="birthday" name="birthday" required style="width: 100%; padding: 8px; margin-top: 5px;">
    <small style="color: gray;">Minors must submit a parental consent form.</small>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="github">GitHub Username</label><br>
    <input type="text" id="github" name="github" placeholder="Optional" style="width: 100%; padding: 8px; margin-top: 5px;">
  </div>

  <h3>Your Interests</h3>
  
  <div style="margin-bottom: 1rem;">
    <label for="groups">What would you like to work on? *</label><br>
    <small style="color: gray; display: block; margin-bottom: 5px;">Hold Ctrl / Cmd to select multiple.</small>
    <select id="groups" name="groups[]" multiple required style="width: 100%; padding: 8px; min-height: 120px;">
      <option value="crd">🛰️ CAPIBARA-CRD (Cosmic Ray Detector)</option>
      <option value="gamma">⚡ CAPIBARA-GAMMA (Gamma-ray / X-ray Programme)</option>
      <option value="sci">🔬 Specific Research Initiative</option>
      <option value="comm">📢 Outreach, Communication & Admin</option>
      <option value="dev">💻 Software / Hardware Development</option>
      <option value="idk">🎓 Not sure yet — just want to learn!</option>
      <option value="other">💡 Other (bring your ideas!)</option>
    </select>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="specify">Please elaborate on your interests</label><br>
    <textarea id="specify" name="specify_group" rows="3" placeholder="Tell us more about what excites you..." style="width: 100%; padding: 8px; margin-top: 5px;"></textarea>
  </div>

  <h3>Additional Information</h3>

  <div style="margin-bottom: 1rem;">
    <label for="notes">Background & Motivation</label><br>
    <textarea id="notes" name="notes" rows="5" placeholder="Tell us about yourself — skills, background, what you hope to get out of CAPIBARA. No selection process; this helps us assign you well." style="width: 100%; padding: 8px; margin-top: 5px;"></textarea>
  </div>

  <div style="margin-bottom: 1.5rem;">
    <label for="referral">How did you hear about us?</label><br>
    <input type="text" id="referral" name="referral" placeholder="Social media, a friend, a course..." style="width: 100%; padding: 8px; margin-top: 5px;">
  </div>

  <p style="font-size: 0.85em; color: gray; margin-bottom: 1.5rem;">
    By submitting this form, you consent to the processing of your personal data for evaluating your application. Your information will not be shared outside CAPIBARA and can be deleted upon request. See our <a href="https://capibara3.github.io/Documentation/2_governance/25_PRIVACY_POLICY.html">privacy policy</a>.
  </p>

  <button type="submit" style="padding: 12px 24px; background-color: #6a0dad; color: white; border: none; border-radius: 5px; cursor: pointer; width: 100%; font-weight: bold;">
    Submit Application
  </button>
</form>
