// sla de originele tekst op bij het laden
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-key]").forEach((element) => {
      if (!element.dataset.original) { // sla de originele tekst alleen op als het nog niet bestaat
        element.dataset.original = element.innerHTML; // gebruik innerHTML om ook html te behouden
      }
    });
  });
  

  const translations = {
    en: {
      "titel": "business terms",
      "ingangsdatum": "effective date: 25/11/2024",
      "welcome": "<strong>welcome!</strong> by booking a performance or business service from Jintra, you agree to the terms below. read these carefully before proceeding.",
      "services": "business services & performances",
      "generalTerms": "general terms",
      "applicability": "<strong>1. applicability</strong><br> these terms apply to all of Jintra\'s business services, including performances, music production, mixing & mastering, and invoicing. by placing an order, the client agrees to these terms.",
      "billing": "billing & payment",
      "billingTerms": "<strong>2. payment term</strong><br> payment must be made within 14 days of the invoice date. if the payment term is exceeded, a 5% interest per month will be charged. for payments via iDeal or PayPal, an additional transaction fee of €1 applies.",
      "invoiceProvision": "<strong>3. invoices</strong><br> invoices are provided for every purchase or order. all purchases are final and non-refundable.",
      "refundTerms": "<strong>4. disputes & refunds</strong><br> refunds will not be granted unless agreed in writing. in case of disputes, contact Jintra directly to resolve the issue.",
      "paymentMethods": "<strong>5. payment methods</strong><br> direct bank transfer, iDeal & PayPal.",
      "promotions": "offers & promotions",
      "promoTerms": "<strong>6. temporary discounts</strong><br> Jintra reserves the right to offer temporary promotions, discounts, or special offers. these are always temporary and do not affect the standard terms. promotional purchases are subject to the same conditions as regular purchases.",
      "performances": "performances & bookings",
      "bookingConfirmation": "<strong>7. bookings</strong><br> a booking is only final after written confirmation. quotes are valid for 7 days unless otherwise agreed. the client is responsible for providing a suitable venue and the minimum required equipment. Jintra will provide a rider with technical and logistical requirements.",
      "cancellationPolicy": "<strong>8. cancellations</strong><br> if the client cancels, the following conditions apply:",
      "daysThirty": ">30 days: no costs",
      "daysFifteenToThirty": "15-30 days: 50% of the agreed amount due",
      "daysUnderFifteen": "<15 days: 100% of the agreed amount due",
      "production": "mixing & mastering",
      "fileRequirements": "<strong>9. file requirements</strong><br> all files must be delivered in WAV format (24-bit, 44.1kHz or higher), correctly named, and without effects (dry). the standard delivery time is 3-7 working days. a mixing or mastering assignment is non-refundable.",
      "revisions": "<strong>10. revisions</strong><br> the client is entitled to 2 free revisions. additional revisions are charged at a rate agreed upon in advance.",
      "fileRetention": "<strong>11. file retention</strong><br> completed projects are stored for 30 days. after this period, files cannot be guaranteed.",
      "liabilityProduction": "<strong>12. liability for mixing & mastering</strong><br> Jintra is not responsible for the commercial success or streaming performance of the final mix or master.",
      "liability": "liability & force majeure",
      "forceMajeure": "<strong>13. force majeure</strong><br> Jintra is not liable for damages resulting from force majeure, including illness, government measures, or extreme weather conditions.",
      "technicalIssues": "<strong>14. technical issues</strong><br> Jintra is not responsible for technical problems caused by the client's equipment.",
      "fileLoss": "<strong>15. file loss</strong><br> once delivered, files are no longer the responsibility of Jintra.",
      "agreement": "agreement & changes",
      "agreementTerms": "<strong>16. agreement</strong><br> by purchasing a service from Jintra, you agree to these terms. these terms may be updated. check <a href=\"https://services.jintra.nl\">services.jintra.nl</a> for the latest version.",
      "contact": "<strong>contact</strong><br> for questions or custom services, email: <a href=\"mailto:hmu@jintra.nl\">hmu@jintra.nl</a>",
      "legalSummary": "<strong>extended legal provisions</strong>",
      "legalApplicableLaw": "<strong>1. applicable law</strong><br> this agreement is subject to Dutch law. all disputes arising from this agreement will be submitted to the competent court in the district where Jintra is established.",
      "legalIntellectualProperty": "<strong>2. intellectual property rights</strong><br> all intellectual property rights, including but not limited to copyright, neighboring rights, and database rights, remain with Jintra at all times. the client only obtains the usage rights expressly granted in this agreement.",
      "legalLiability": "<strong>3. liability</strong><br> Jintra is not liable for any damages resulting from the use of services provided, unless there is intent or gross negligence. Jintra's total liability is always limited to the amount paid for the specific service or assignment.",
      "legalIndemnification": "<strong>4. indemnification</strong><br> the client indemnifies Jintra against all claims from third parties related to the use of a service provided or a performance carried out by Jintra.",
      "legalSeverability": "<strong>5. severability</strong><br> if one or more provisions of these terms are found to be invalid, this does not affect the validity of the remaining provisions. in that case, the parties will replace the invalid provision with a valid provision that closely aligns with the intent of the invalid provision.",
      "legalChanges": "<strong>6. changes</strong><br> Jintra reserves the right to amend these terms. changes take effect 30 days after notification. for already completed assignments or agreements, the terms that applied at the time of booking or assignment remain in force.",
      "legalAgreement": "<strong>7. agreement</strong><br> by engaging Jintra for a service, including performances, mixing & mastering, or business collaborations, the client expressly agrees to these terms. this agreement constitutes the entire agreement between the parties and supersedes all previous oral or written arrangements.",
      "footer": "© 2025 Jintra — all rights reserved."
    }
  };
  

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (lang === "en") {
      element.innerHTML = translations[lang][key] || element.innerHTML;
    } else {
      element.innerHTML = element.dataset.original || element.innerHTML; // herstel originele tekst
    }
  });
}


